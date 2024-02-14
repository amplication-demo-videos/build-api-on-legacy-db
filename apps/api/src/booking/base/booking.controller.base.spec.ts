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
import { BookingController } from "../booking.controller";
import { BookingService } from "../booking.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  cancellationReason: "exampleCancellationReason",
  createdAt: new Date(),
  description: "exampleDescription",
  dynamicEventSlugRef: "exampleDynamicEventSlugRef",
  dynamicGroupSlugRef: "exampleDynamicGroupSlugRef",
  endTime: new Date(),
  fromReschedule: "exampleFromReschedule",
  id: 42,
  location: "exampleLocation",
  paid: "true",
  recurringEventId: "exampleRecurringEventId",
  rejectionReason: "exampleRejectionReason",
  rescheduled: "true",
  smsReminderNumber: "exampleSmsReminderNumber",
  startTime: new Date(),
  title: "exampleTitle",
  uid: "exampleUid",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  cancellationReason: "exampleCancellationReason",
  createdAt: new Date(),
  description: "exampleDescription",
  dynamicEventSlugRef: "exampleDynamicEventSlugRef",
  dynamicGroupSlugRef: "exampleDynamicGroupSlugRef",
  endTime: new Date(),
  fromReschedule: "exampleFromReschedule",
  id: 42,
  location: "exampleLocation",
  paid: "true",
  recurringEventId: "exampleRecurringEventId",
  rejectionReason: "exampleRejectionReason",
  rescheduled: "true",
  smsReminderNumber: "exampleSmsReminderNumber",
  startTime: new Date(),
  title: "exampleTitle",
  uid: "exampleUid",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    cancellationReason: "exampleCancellationReason",
    createdAt: new Date(),
    description: "exampleDescription",
    dynamicEventSlugRef: "exampleDynamicEventSlugRef",
    dynamicGroupSlugRef: "exampleDynamicGroupSlugRef",
    endTime: new Date(),
    fromReschedule: "exampleFromReschedule",
    id: 42,
    location: "exampleLocation",
    paid: "true",
    recurringEventId: "exampleRecurringEventId",
    rejectionReason: "exampleRejectionReason",
    rescheduled: "true",
    smsReminderNumber: "exampleSmsReminderNumber",
    startTime: new Date(),
    title: "exampleTitle",
    uid: "exampleUid",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  cancellationReason: "exampleCancellationReason",
  createdAt: new Date(),
  description: "exampleDescription",
  dynamicEventSlugRef: "exampleDynamicEventSlugRef",
  dynamicGroupSlugRef: "exampleDynamicGroupSlugRef",
  endTime: new Date(),
  fromReschedule: "exampleFromReschedule",
  id: 42,
  location: "exampleLocation",
  paid: "true",
  recurringEventId: "exampleRecurringEventId",
  rejectionReason: "exampleRejectionReason",
  rescheduled: "true",
  smsReminderNumber: "exampleSmsReminderNumber",
  startTime: new Date(),
  title: "exampleTitle",
  uid: "exampleUid",
  updatedAt: new Date(),
};

const service = {
  createBooking() {
    return CREATE_RESULT;
  },
  bookings: () => FIND_MANY_RESULT,
  booking: ({ where }: { where: { id: string } }) => {
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

describe("Booking", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: BookingService,
          useValue: service,
        },
      ],
      controllers: [BookingController],
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

  test("POST /bookings", async () => {
    await request(app.getHttpServer())
      .post("/bookings")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        endTime: CREATE_RESULT.endTime.toISOString(),
        startTime: CREATE_RESULT.startTime.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /bookings", async () => {
    await request(app.getHttpServer())
      .get("/bookings")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          endTime: FIND_MANY_RESULT[0].endTime.toISOString(),
          startTime: FIND_MANY_RESULT[0].startTime.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /bookings/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/bookings"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /bookings/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/bookings"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        endTime: FIND_ONE_RESULT.endTime.toISOString(),
        startTime: FIND_ONE_RESULT.startTime.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /bookings existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/bookings")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        endTime: CREATE_RESULT.endTime.toISOString(),
        startTime: CREATE_RESULT.startTime.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/bookings")
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
