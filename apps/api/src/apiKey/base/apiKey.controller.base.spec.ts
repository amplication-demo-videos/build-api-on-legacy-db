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
import { ApiKeyController } from "../apiKey.controller";
import { ApiKeyService } from "../apiKey.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  createdAt: new Date(),
  expiresAt: new Date(),
  hashedKey: "exampleHashedKey",
  id: "exampleId",
  lastUsedAt: new Date(),
  note: "exampleNote",
};
const CREATE_RESULT = {
  createdAt: new Date(),
  expiresAt: new Date(),
  hashedKey: "exampleHashedKey",
  id: "exampleId",
  lastUsedAt: new Date(),
  note: "exampleNote",
};
const FIND_MANY_RESULT = [
  {
    createdAt: new Date(),
    expiresAt: new Date(),
    hashedKey: "exampleHashedKey",
    id: "exampleId",
    lastUsedAt: new Date(),
    note: "exampleNote",
  },
];
const FIND_ONE_RESULT = {
  createdAt: new Date(),
  expiresAt: new Date(),
  hashedKey: "exampleHashedKey",
  id: "exampleId",
  lastUsedAt: new Date(),
  note: "exampleNote",
};

const service = {
  createApiKey() {
    return CREATE_RESULT;
  },
  apiKeys: () => FIND_MANY_RESULT,
  apiKey: ({ where }: { where: { id: string } }) => {
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

describe("ApiKey", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: ApiKeyService,
          useValue: service,
        },
      ],
      controllers: [ApiKeyController],
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

  test("POST /apiKeys", async () => {
    await request(app.getHttpServer())
      .post("/apiKeys")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        expiresAt: CREATE_RESULT.expiresAt.toISOString(),
        lastUsedAt: CREATE_RESULT.lastUsedAt.toISOString(),
      });
  });

  test("GET /apiKeys", async () => {
    await request(app.getHttpServer())
      .get("/apiKeys")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          expiresAt: FIND_MANY_RESULT[0].expiresAt.toISOString(),
          lastUsedAt: FIND_MANY_RESULT[0].lastUsedAt.toISOString(),
        },
      ]);
  });

  test("GET /apiKeys/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/apiKeys"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /apiKeys/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/apiKeys"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        expiresAt: FIND_ONE_RESULT.expiresAt.toISOString(),
        lastUsedAt: FIND_ONE_RESULT.lastUsedAt.toISOString(),
      });
  });

  test("POST /apiKeys existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/apiKeys")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        expiresAt: CREATE_RESULT.expiresAt.toISOString(),
        lastUsedAt: CREATE_RESULT.lastUsedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/apiKeys")
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
