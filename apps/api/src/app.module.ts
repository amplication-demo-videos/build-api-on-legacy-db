import { Module } from "@nestjs/common";
import { EventTypeModule } from "./eventType/eventType.module";
import { CredentialModule } from "./credential/credential.module";
import { DestinationCalendarModule } from "./destinationCalendar/destinationCalendar.module";
import { UserModule } from "./user/user.module";
import { TeamModule } from "./team/team.module";
import { MembershipModule } from "./membership/membership.module";
import { VerificationTokenModule } from "./verificationToken/verificationToken.module";
import { BookingReferenceModule } from "./bookingReference/bookingReference.module";
import { AttendeeModule } from "./attendee/attendee.module";
import { DailyEventReferenceModule } from "./dailyEventReference/dailyEventReference.module";
import { BookingModule } from "./booking/booking.module";
import { ScheduleModule } from "./schedule/schedule.module";
import { AvailabilityModule } from "./availability/availability.module";
import { SelectedCalendarModule } from "./selectedCalendar/selectedCalendar.module";
import { EventTypeCustomInputModule } from "./eventTypeCustomInput/eventTypeCustomInput.module";
import { ResetPasswordRequestModule } from "./resetPasswordRequest/resetPasswordRequest.module";
import { ReminderMailModule } from "./reminderMail/reminderMail.module";
import { PaymentModule } from "./payment/payment.module";
import { WebhookModule } from "./webhook/webhook.module";
import { ImpersonationModule } from "./impersonation/impersonation.module";
import { ApiKeyModule } from "./apiKey/apiKey.module";
import { HashedLinkModule } from "./hashedLink/hashedLink.module";
import { AccountModule } from "./account/account.module";
import { SessionModule } from "./session/session.module";
import { AppModelModule } from "./appModel/appModel.module";
import { FeedbackModule } from "./feedback/feedback.module";
import { WorkflowStepModule } from "./workflowStep/workflowStep.module";
import { WorkflowModule } from "./workflow/workflow.module";
import { WorkflowsOnEventTypeModule } from "./workflowsOnEventType/workflowsOnEventType.module";
import { WorkflowReminderModule } from "./workflowReminder/workflowReminder.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    EventTypeModule,
    CredentialModule,
    DestinationCalendarModule,
    UserModule,
    TeamModule,
    MembershipModule,
    VerificationTokenModule,
    BookingReferenceModule,
    AttendeeModule,
    DailyEventReferenceModule,
    BookingModule,
    ScheduleModule,
    AvailabilityModule,
    SelectedCalendarModule,
    EventTypeCustomInputModule,
    ResetPasswordRequestModule,
    ReminderMailModule,
    PaymentModule,
    WebhookModule,
    ImpersonationModule,
    ApiKeyModule,
    HashedLinkModule,
    AccountModule,
    SessionModule,
    AppModelModule,
    FeedbackModule,
    WorkflowStepModule,
    WorkflowModule,
    WorkflowsOnEventTypeModule,
    WorkflowReminderModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
