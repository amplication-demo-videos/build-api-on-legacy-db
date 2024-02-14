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
import { UserController } from "../user.controller";
import { UserService } from "../user.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  allowDynamicBooking: "true",
  avatar: "exampleAvatar",
  away: "true",
  bio: "exampleBio",
  brandColor: "exampleBrandColor",
  bufferTime: 42,
  completedOnboarding: "true",
  createdDate: new Date(),
  darkBrandColor: "exampleDarkBrandColor",
  defaultScheduleId: 42,
  disableImpersonation: "true",
  email: "exampleEmail",
  emailVerified: new Date(),
  endTime: 42,
  hideBranding: "true",
  id: 42,
  identityProviderId: "exampleIdentityProviderId",
  invitedTo: 42,
  locale: "exampleLocale",
  name: "exampleName",
  password: "examplePassword",
  startTime: 42,
  theme: "exampleTheme",
  timeFormat: 42,
  timeZone: "exampleTimeZone",
  trialEndsAt: new Date(),
  twoFactorEnabled: "true",
  twoFactorSecret: "exampleTwoFactorSecret",
  username: "exampleUsername",
  verified: "true",
  weekStart: "exampleWeekStart",
};
const CREATE_RESULT = {
  allowDynamicBooking: "true",
  avatar: "exampleAvatar",
  away: "true",
  bio: "exampleBio",
  brandColor: "exampleBrandColor",
  bufferTime: 42,
  completedOnboarding: "true",
  createdDate: new Date(),
  darkBrandColor: "exampleDarkBrandColor",
  defaultScheduleId: 42,
  disableImpersonation: "true",
  email: "exampleEmail",
  emailVerified: new Date(),
  endTime: 42,
  hideBranding: "true",
  id: 42,
  identityProviderId: "exampleIdentityProviderId",
  invitedTo: 42,
  locale: "exampleLocale",
  name: "exampleName",
  password: "examplePassword",
  startTime: 42,
  theme: "exampleTheme",
  timeFormat: 42,
  timeZone: "exampleTimeZone",
  trialEndsAt: new Date(),
  twoFactorEnabled: "true",
  twoFactorSecret: "exampleTwoFactorSecret",
  username: "exampleUsername",
  verified: "true",
  weekStart: "exampleWeekStart",
};
const FIND_MANY_RESULT = [
  {
    allowDynamicBooking: "true",
    avatar: "exampleAvatar",
    away: "true",
    bio: "exampleBio",
    brandColor: "exampleBrandColor",
    bufferTime: 42,
    completedOnboarding: "true",
    createdDate: new Date(),
    darkBrandColor: "exampleDarkBrandColor",
    defaultScheduleId: 42,
    disableImpersonation: "true",
    email: "exampleEmail",
    emailVerified: new Date(),
    endTime: 42,
    hideBranding: "true",
    id: 42,
    identityProviderId: "exampleIdentityProviderId",
    invitedTo: 42,
    locale: "exampleLocale",
    name: "exampleName",
    password: "examplePassword",
    startTime: 42,
    theme: "exampleTheme",
    timeFormat: 42,
    timeZone: "exampleTimeZone",
    trialEndsAt: new Date(),
    twoFactorEnabled: "true",
    twoFactorSecret: "exampleTwoFactorSecret",
    username: "exampleUsername",
    verified: "true",
    weekStart: "exampleWeekStart",
  },
];
const FIND_ONE_RESULT = {
  allowDynamicBooking: "true",
  avatar: "exampleAvatar",
  away: "true",
  bio: "exampleBio",
  brandColor: "exampleBrandColor",
  bufferTime: 42,
  completedOnboarding: "true",
  createdDate: new Date(),
  darkBrandColor: "exampleDarkBrandColor",
  defaultScheduleId: 42,
  disableImpersonation: "true",
  email: "exampleEmail",
  emailVerified: new Date(),
  endTime: 42,
  hideBranding: "true",
  id: 42,
  identityProviderId: "exampleIdentityProviderId",
  invitedTo: 42,
  locale: "exampleLocale",
  name: "exampleName",
  password: "examplePassword",
  startTime: 42,
  theme: "exampleTheme",
  timeFormat: 42,
  timeZone: "exampleTimeZone",
  trialEndsAt: new Date(),
  twoFactorEnabled: "true",
  twoFactorSecret: "exampleTwoFactorSecret",
  username: "exampleUsername",
  verified: "true",
  weekStart: "exampleWeekStart",
};

const service = {
  createUser() {
    return CREATE_RESULT;
  },
  users: () => FIND_MANY_RESULT,
  user: ({ where }: { where: { id: string } }) => {
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

describe("User", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: UserService,
          useValue: service,
        },
      ],
      controllers: [UserController],
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

  test("POST /users", async () => {
    await request(app.getHttpServer())
      .post("/users")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdDate: CREATE_RESULT.createdDate.toISOString(),
        emailVerified: CREATE_RESULT.emailVerified.toISOString(),
        trialEndsAt: CREATE_RESULT.trialEndsAt.toISOString(),
      });
  });

  test("GET /users", async () => {
    await request(app.getHttpServer())
      .get("/users")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdDate: FIND_MANY_RESULT[0].createdDate.toISOString(),
          emailVerified: FIND_MANY_RESULT[0].emailVerified.toISOString(),
          trialEndsAt: FIND_MANY_RESULT[0].trialEndsAt.toISOString(),
        },
      ]);
  });

  test("GET /users/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/users"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /users/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/users"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdDate: FIND_ONE_RESULT.createdDate.toISOString(),
        emailVerified: FIND_ONE_RESULT.emailVerified.toISOString(),
        trialEndsAt: FIND_ONE_RESULT.trialEndsAt.toISOString(),
      });
  });

  test("POST /users existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/users")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdDate: CREATE_RESULT.createdDate.toISOString(),
        emailVerified: CREATE_RESULT.emailVerified.toISOString(),
        trialEndsAt: CREATE_RESULT.trialEndsAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/users")
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
