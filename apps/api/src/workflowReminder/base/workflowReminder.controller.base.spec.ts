import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { WorkflowReminderController } from "../workflowReminder.controller";
import { WorkflowReminderService } from "../workflowReminder.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  id: 42,
  referenceId: "exampleReferenceId",
  scheduled: "true",
  scheduledDate: new Date(),
};
const CREATE_RESULT = {
  id: 42,
  referenceId: "exampleReferenceId",
  scheduled: "true",
  scheduledDate: new Date(),
};
const FIND_MANY_RESULT = [
  {
    id: 42,
    referenceId: "exampleReferenceId",
    scheduled: "true",
    scheduledDate: new Date(),
  },
];
const FIND_ONE_RESULT = {
  id: 42,
  referenceId: "exampleReferenceId",
  scheduled: "true",
  scheduledDate: new Date(),
};

const service = {
  createWorkflowReminder() {
    return CREATE_RESULT;
  },
  workflowReminders: () => FIND_MANY_RESULT,
  workflowReminder: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("WorkflowReminder", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: WorkflowReminderService,
          useValue: service,
        },
      ],
      controllers: [WorkflowReminderController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /workflowReminders", async () => {
    await request(app.getHttpServer())
      .post("/workflowReminders")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        scheduledDate: CREATE_RESULT.scheduledDate.toISOString(),
      });
  });

  test("GET /workflowReminders", async () => {
    await request(app.getHttpServer())
      .get("/workflowReminders")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          scheduledDate: FIND_MANY_RESULT[0].scheduledDate.toISOString(),
        },
      ]);
  });

  test("GET /workflowReminders/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/workflowReminders"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /workflowReminders/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/workflowReminders"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        scheduledDate: FIND_ONE_RESULT.scheduledDate.toISOString(),
      });
  });

  test("POST /workflowReminders existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/workflowReminders")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        scheduledDate: CREATE_RESULT.scheduledDate.toISOString(),
      })
      .then(function () {
        agent
          .post("/workflowReminders")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
