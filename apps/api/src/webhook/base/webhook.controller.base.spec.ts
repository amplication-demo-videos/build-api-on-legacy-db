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
import { WebhookController } from "../webhook.controller";
import { WebhookService } from "../webhook.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  active: "true",
  createdAt: new Date(),
  id: "exampleId",
  payloadTemplate: "examplePayloadTemplate",
  secret: "exampleSecret",
  subscriberUrl: "exampleSubscriberUrl",
};
const CREATE_RESULT = {
  active: "true",
  createdAt: new Date(),
  id: "exampleId",
  payloadTemplate: "examplePayloadTemplate",
  secret: "exampleSecret",
  subscriberUrl: "exampleSubscriberUrl",
};
const FIND_MANY_RESULT = [
  {
    active: "true",
    createdAt: new Date(),
    id: "exampleId",
    payloadTemplate: "examplePayloadTemplate",
    secret: "exampleSecret",
    subscriberUrl: "exampleSubscriberUrl",
  },
];
const FIND_ONE_RESULT = {
  active: "true",
  createdAt: new Date(),
  id: "exampleId",
  payloadTemplate: "examplePayloadTemplate",
  secret: "exampleSecret",
  subscriberUrl: "exampleSubscriberUrl",
};

const service = {
  createWebhook() {
    return CREATE_RESULT;
  },
  webhooks: () => FIND_MANY_RESULT,
  webhook: ({ where }: { where: { id: string } }) => {
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

describe("Webhook", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: WebhookService,
          useValue: service,
        },
      ],
      controllers: [WebhookController],
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

  test("POST /webhooks", async () => {
    await request(app.getHttpServer())
      .post("/webhooks")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
      });
  });

  test("GET /webhooks", async () => {
    await request(app.getHttpServer())
      .get("/webhooks")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
        },
      ]);
  });

  test("GET /webhooks/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/webhooks"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /webhooks/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/webhooks"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
      });
  });

  test("POST /webhooks existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/webhooks")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/webhooks")
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
