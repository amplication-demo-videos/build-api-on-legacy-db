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
import { SessionController } from "../session.controller";
import { SessionService } from "../session.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  expires: new Date(),
  id: "exampleId",
  sessionToken: "exampleSessionToken",
};
const CREATE_RESULT = {
  expires: new Date(),
  id: "exampleId",
  sessionToken: "exampleSessionToken",
};
const FIND_MANY_RESULT = [
  {
    expires: new Date(),
    id: "exampleId",
    sessionToken: "exampleSessionToken",
  },
];
const FIND_ONE_RESULT = {
  expires: new Date(),
  id: "exampleId",
  sessionToken: "exampleSessionToken",
};

const service = {
  createSession() {
    return CREATE_RESULT;
  },
  sessions: () => FIND_MANY_RESULT,
  session: ({ where }: { where: { id: string } }) => {
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

describe("Session", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: SessionService,
          useValue: service,
        },
      ],
      controllers: [SessionController],
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

  test("POST /sessions", async () => {
    await request(app.getHttpServer())
      .post("/sessions")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        expires: CREATE_RESULT.expires.toISOString(),
      });
  });

  test("GET /sessions", async () => {
    await request(app.getHttpServer())
      .get("/sessions")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          expires: FIND_MANY_RESULT[0].expires.toISOString(),
        },
      ]);
  });

  test("GET /sessions/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/sessions"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /sessions/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/sessions"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        expires: FIND_ONE_RESULT.expires.toISOString(),
      });
  });

  test("POST /sessions existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/sessions")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        expires: CREATE_RESULT.expires.toISOString(),
      })
      .then(function () {
        agent
          .post("/sessions")
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
