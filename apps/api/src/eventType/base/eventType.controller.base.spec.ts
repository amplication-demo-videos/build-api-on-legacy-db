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
import { EventTypeController } from "../eventType.controller";
import { EventTypeService } from "../eventType.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  afterEventBuffer: 42,
  beforeEventBuffer: 42,
  currency: "exampleCurrency",
  description: "exampleDescription",
  disableGuests: "true",
  eventName: "exampleEventName",
  hidden: "true",
  hideCalendarNotes: "true",
  id: 42,
  length: 42,
  minimumBookingNotice: 42,
  periodCountCalendarDays: "true",
  periodDays: 42,
  periodEndDate: new Date(),
  periodStartDate: new Date(),
  position: 42,
  price: 42,
  requiresConfirmation: "true",
  seatsPerTimeSlot: 42,
  slotInterval: 42,
  slug: "exampleSlug",
  successRedirectUrl: "exampleSuccessRedirectUrl",
  timeZone: "exampleTimeZone",
  title: "exampleTitle",
  userId: 42,
};
const CREATE_RESULT = {
  afterEventBuffer: 42,
  beforeEventBuffer: 42,
  currency: "exampleCurrency",
  description: "exampleDescription",
  disableGuests: "true",
  eventName: "exampleEventName",
  hidden: "true",
  hideCalendarNotes: "true",
  id: 42,
  length: 42,
  minimumBookingNotice: 42,
  periodCountCalendarDays: "true",
  periodDays: 42,
  periodEndDate: new Date(),
  periodStartDate: new Date(),
  position: 42,
  price: 42,
  requiresConfirmation: "true",
  seatsPerTimeSlot: 42,
  slotInterval: 42,
  slug: "exampleSlug",
  successRedirectUrl: "exampleSuccessRedirectUrl",
  timeZone: "exampleTimeZone",
  title: "exampleTitle",
  userId: 42,
};
const FIND_MANY_RESULT = [
  {
    afterEventBuffer: 42,
    beforeEventBuffer: 42,
    currency: "exampleCurrency",
    description: "exampleDescription",
    disableGuests: "true",
    eventName: "exampleEventName",
    hidden: "true",
    hideCalendarNotes: "true",
    id: 42,
    length: 42,
    minimumBookingNotice: 42,
    periodCountCalendarDays: "true",
    periodDays: 42,
    periodEndDate: new Date(),
    periodStartDate: new Date(),
    position: 42,
    price: 42,
    requiresConfirmation: "true",
    seatsPerTimeSlot: 42,
    slotInterval: 42,
    slug: "exampleSlug",
    successRedirectUrl: "exampleSuccessRedirectUrl",
    timeZone: "exampleTimeZone",
    title: "exampleTitle",
    userId: 42,
  },
];
const FIND_ONE_RESULT = {
  afterEventBuffer: 42,
  beforeEventBuffer: 42,
  currency: "exampleCurrency",
  description: "exampleDescription",
  disableGuests: "true",
  eventName: "exampleEventName",
  hidden: "true",
  hideCalendarNotes: "true",
  id: 42,
  length: 42,
  minimumBookingNotice: 42,
  periodCountCalendarDays: "true",
  periodDays: 42,
  periodEndDate: new Date(),
  periodStartDate: new Date(),
  position: 42,
  price: 42,
  requiresConfirmation: "true",
  seatsPerTimeSlot: 42,
  slotInterval: 42,
  slug: "exampleSlug",
  successRedirectUrl: "exampleSuccessRedirectUrl",
  timeZone: "exampleTimeZone",
  title: "exampleTitle",
  userId: 42,
};

const service = {
  createEventType() {
    return CREATE_RESULT;
  },
  eventTypes: () => FIND_MANY_RESULT,
  eventType: ({ where }: { where: { id: string } }) => {
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

describe("EventType", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: EventTypeService,
          useValue: service,
        },
      ],
      controllers: [EventTypeController],
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

  test("POST /eventTypes", async () => {
    await request(app.getHttpServer())
      .post("/eventTypes")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        periodEndDate: CREATE_RESULT.periodEndDate.toISOString(),
        periodStartDate: CREATE_RESULT.periodStartDate.toISOString(),
      });
  });

  test("GET /eventTypes", async () => {
    await request(app.getHttpServer())
      .get("/eventTypes")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          periodEndDate: FIND_MANY_RESULT[0].periodEndDate.toISOString(),
          periodStartDate: FIND_MANY_RESULT[0].periodStartDate.toISOString(),
        },
      ]);
  });

  test("GET /eventTypes/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/eventTypes"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /eventTypes/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/eventTypes"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        periodEndDate: FIND_ONE_RESULT.periodEndDate.toISOString(),
        periodStartDate: FIND_ONE_RESULT.periodStartDate.toISOString(),
      });
  });

  test("POST /eventTypes existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/eventTypes")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        periodEndDate: CREATE_RESULT.periodEndDate.toISOString(),
        periodStartDate: CREATE_RESULT.periodStartDate.toISOString(),
      })
      .then(function () {
        agent
          .post("/eventTypes")
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
