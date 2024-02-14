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
import { AccountController } from "../account.controller";
import { AccountService } from "../account.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  accessToken: "exampleAccessToken",
  expiresAt: 42,
  id: "exampleId",
  idToken: "exampleIdToken",
  provider: "exampleProvider",
  providerAccountId: "exampleProviderAccountId",
  refreshToken: "exampleRefreshToken",
  scope: "exampleScope",
  sessionState: "exampleSessionState",
  tokenType: "exampleTokenType",
  typeField: "exampleTypeField",
};
const CREATE_RESULT = {
  accessToken: "exampleAccessToken",
  expiresAt: 42,
  id: "exampleId",
  idToken: "exampleIdToken",
  provider: "exampleProvider",
  providerAccountId: "exampleProviderAccountId",
  refreshToken: "exampleRefreshToken",
  scope: "exampleScope",
  sessionState: "exampleSessionState",
  tokenType: "exampleTokenType",
  typeField: "exampleTypeField",
};
const FIND_MANY_RESULT = [
  {
    accessToken: "exampleAccessToken",
    expiresAt: 42,
    id: "exampleId",
    idToken: "exampleIdToken",
    provider: "exampleProvider",
    providerAccountId: "exampleProviderAccountId",
    refreshToken: "exampleRefreshToken",
    scope: "exampleScope",
    sessionState: "exampleSessionState",
    tokenType: "exampleTokenType",
    typeField: "exampleTypeField",
  },
];
const FIND_ONE_RESULT = {
  accessToken: "exampleAccessToken",
  expiresAt: 42,
  id: "exampleId",
  idToken: "exampleIdToken",
  provider: "exampleProvider",
  providerAccountId: "exampleProviderAccountId",
  refreshToken: "exampleRefreshToken",
  scope: "exampleScope",
  sessionState: "exampleSessionState",
  tokenType: "exampleTokenType",
  typeField: "exampleTypeField",
};

const service = {
  createAccount() {
    return CREATE_RESULT;
  },
  accounts: () => FIND_MANY_RESULT,
  account: ({ where }: { where: { id: string } }) => {
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

describe("Account", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: AccountService,
          useValue: service,
        },
      ],
      controllers: [AccountController],
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

  test("POST /accounts", async () => {
    await request(app.getHttpServer())
      .post("/accounts")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT);
  });

  test("GET /accounts", async () => {
    await request(app.getHttpServer())
      .get("/accounts")
      .expect(HttpStatus.OK)
      .expect([FIND_MANY_RESULT[0]]);
  });

  test("GET /accounts/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/accounts"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /accounts/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/accounts"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect(FIND_ONE_RESULT);
  });

  test("POST /accounts existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/accounts")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT)
      .then(function () {
        agent
          .post("/accounts")
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
