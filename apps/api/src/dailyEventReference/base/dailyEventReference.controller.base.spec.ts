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
import { DailyEventReferenceController } from "../dailyEventReference.controller";
import { DailyEventReferenceService } from "../dailyEventReference.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  dailytoken: "exampleDailytoken",
  dailyurl: "exampleDailyurl",
  id: 42,
};
const CREATE_RESULT = {
  dailytoken: "exampleDailytoken",
  dailyurl: "exampleDailyurl",
  id: 42,
};
const FIND_MANY_RESULT = [
  {
    dailytoken: "exampleDailytoken",
    dailyurl: "exampleDailyurl",
    id: 42,
  },
];
const FIND_ONE_RESULT = {
  dailytoken: "exampleDailytoken",
  dailyurl: "exampleDailyurl",
  id: 42,
};

const service = {
  createDailyEventReference() {
    return CREATE_RESULT;
  },
  dailyEventReferences: () => FIND_MANY_RESULT,
  dailyEventReference: ({ where }: { where: { id: string } }) => {
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

describe("DailyEventReference", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: DailyEventReferenceService,
          useValue: service,
        },
      ],
      controllers: [DailyEventReferenceController],
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

  test("POST /dailyEventReferences", async () => {
    await request(app.getHttpServer())
      .post("/dailyEventReferences")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT);
  });

  test("GET /dailyEventReferences", async () => {
    await request(app.getHttpServer())
      .get("/dailyEventReferences")
      .expect(HttpStatus.OK)
      .expect([FIND_MANY_RESULT[0]]);
  });

  test("GET /dailyEventReferences/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/dailyEventReferences"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /dailyEventReferences/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/dailyEventReferences"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect(FIND_ONE_RESULT);
  });

  test("POST /dailyEventReferences existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/dailyEventReferences")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT)
      .then(function () {
        agent
          .post("/dailyEventReferences")
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
