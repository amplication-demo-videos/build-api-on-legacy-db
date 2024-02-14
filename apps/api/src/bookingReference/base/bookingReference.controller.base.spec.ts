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
import { BookingReferenceController } from "../bookingReference.controller";
import { BookingReferenceService } from "../bookingReference.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  deleted: "true",
  externalCalendarId: "exampleExternalCalendarId",
  id: 42,
  meetingId: "exampleMeetingId",
  meetingPassword: "exampleMeetingPassword",
  meetingUrl: "exampleMeetingUrl",
  typeField: "exampleTypeField",
  uid: "exampleUid",
};
const CREATE_RESULT = {
  deleted: "true",
  externalCalendarId: "exampleExternalCalendarId",
  id: 42,
  meetingId: "exampleMeetingId",
  meetingPassword: "exampleMeetingPassword",
  meetingUrl: "exampleMeetingUrl",
  typeField: "exampleTypeField",
  uid: "exampleUid",
};
const FIND_MANY_RESULT = [
  {
    deleted: "true",
    externalCalendarId: "exampleExternalCalendarId",
    id: 42,
    meetingId: "exampleMeetingId",
    meetingPassword: "exampleMeetingPassword",
    meetingUrl: "exampleMeetingUrl",
    typeField: "exampleTypeField",
    uid: "exampleUid",
  },
];
const FIND_ONE_RESULT = {
  deleted: "true",
  externalCalendarId: "exampleExternalCalendarId",
  id: 42,
  meetingId: "exampleMeetingId",
  meetingPassword: "exampleMeetingPassword",
  meetingUrl: "exampleMeetingUrl",
  typeField: "exampleTypeField",
  uid: "exampleUid",
};

const service = {
  createBookingReference() {
    return CREATE_RESULT;
  },
  bookingReferences: () => FIND_MANY_RESULT,
  bookingReference: ({ where }: { where: { id: string } }) => {
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

describe("BookingReference", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: BookingReferenceService,
          useValue: service,
        },
      ],
      controllers: [BookingReferenceController],
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

  test("POST /bookingReferences", async () => {
    await request(app.getHttpServer())
      .post("/bookingReferences")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT);
  });

  test("GET /bookingReferences", async () => {
    await request(app.getHttpServer())
      .get("/bookingReferences")
      .expect(HttpStatus.OK)
      .expect([FIND_MANY_RESULT[0]]);
  });

  test("GET /bookingReferences/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/bookingReferences"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /bookingReferences/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/bookingReferences"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect(FIND_ONE_RESULT);
  });

  test("POST /bookingReferences existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/bookingReferences")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT)
      .then(function () {
        agent
          .post("/bookingReferences")
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
