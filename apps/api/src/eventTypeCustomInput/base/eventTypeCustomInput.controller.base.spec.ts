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
import { EventTypeCustomInputController } from "../eventTypeCustomInput.controller";
import { EventTypeCustomInputService } from "../eventTypeCustomInput.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  id: 42,
  label: "exampleLabel",
  placeholder: "examplePlaceholder",
  required: "true",
};
const CREATE_RESULT = {
  id: 42,
  label: "exampleLabel",
  placeholder: "examplePlaceholder",
  required: "true",
};
const FIND_MANY_RESULT = [
  {
    id: 42,
    label: "exampleLabel",
    placeholder: "examplePlaceholder",
    required: "true",
  },
];
const FIND_ONE_RESULT = {
  id: 42,
  label: "exampleLabel",
  placeholder: "examplePlaceholder",
  required: "true",
};

const service = {
  createEventTypeCustomInput() {
    return CREATE_RESULT;
  },
  eventTypeCustomInputs: () => FIND_MANY_RESULT,
  eventTypeCustomInput: ({ where }: { where: { id: string } }) => {
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

describe("EventTypeCustomInput", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: EventTypeCustomInputService,
          useValue: service,
        },
      ],
      controllers: [EventTypeCustomInputController],
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

  test("POST /eventTypeCustomInputs", async () => {
    await request(app.getHttpServer())
      .post("/eventTypeCustomInputs")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT);
  });

  test("GET /eventTypeCustomInputs", async () => {
    await request(app.getHttpServer())
      .get("/eventTypeCustomInputs")
      .expect(HttpStatus.OK)
      .expect([FIND_MANY_RESULT[0]]);
  });

  test("GET /eventTypeCustomInputs/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/eventTypeCustomInputs"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /eventTypeCustomInputs/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/eventTypeCustomInputs"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect(FIND_ONE_RESULT);
  });

  test("POST /eventTypeCustomInputs existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/eventTypeCustomInputs")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT)
      .then(function () {
        agent
          .post("/eventTypeCustomInputs")
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
