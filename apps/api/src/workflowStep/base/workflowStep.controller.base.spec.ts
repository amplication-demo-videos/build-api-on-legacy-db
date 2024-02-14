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
import { WorkflowStepController } from "../workflowStep.controller";
import { WorkflowStepService } from "../workflowStep.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  emailSubject: "exampleEmailSubject",
  id: 42,
  reminderBody: "exampleReminderBody",
  sendTo: "exampleSendTo",
  stepNumber: 42,
};
const CREATE_RESULT = {
  emailSubject: "exampleEmailSubject",
  id: 42,
  reminderBody: "exampleReminderBody",
  sendTo: "exampleSendTo",
  stepNumber: 42,
};
const FIND_MANY_RESULT = [
  {
    emailSubject: "exampleEmailSubject",
    id: 42,
    reminderBody: "exampleReminderBody",
    sendTo: "exampleSendTo",
    stepNumber: 42,
  },
];
const FIND_ONE_RESULT = {
  emailSubject: "exampleEmailSubject",
  id: 42,
  reminderBody: "exampleReminderBody",
  sendTo: "exampleSendTo",
  stepNumber: 42,
};

const service = {
  createWorkflowStep() {
    return CREATE_RESULT;
  },
  workflowSteps: () => FIND_MANY_RESULT,
  workflowStep: ({ where }: { where: { id: string } }) => {
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

describe("WorkflowStep", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: WorkflowStepService,
          useValue: service,
        },
      ],
      controllers: [WorkflowStepController],
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

  test("POST /workflowSteps", async () => {
    await request(app.getHttpServer())
      .post("/workflowSteps")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT);
  });

  test("GET /workflowSteps", async () => {
    await request(app.getHttpServer())
      .get("/workflowSteps")
      .expect(HttpStatus.OK)
      .expect([FIND_MANY_RESULT[0]]);
  });

  test("GET /workflowSteps/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/workflowSteps"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /workflowSteps/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/workflowSteps"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect(FIND_ONE_RESULT);
  });

  test("POST /workflowSteps existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/workflowSteps")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT)
      .then(function () {
        agent
          .post("/workflowSteps")
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
