import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  BooleanField,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { USER_TITLE_FIELD } from "./UserTitle";
import { APPMODEL_TITLE_FIELD } from "../appModel/AppModelTitle";
import { EVENTTYPE_TITLE_FIELD } from "../eventType/EventTypeTitle";
import { SCHEDULE_TITLE_FIELD } from "../schedule/ScheduleTitle";
import { DAILYEVENTREFERENCE_TITLE_FIELD } from "../dailyEventReference/DailyEventReferenceTitle";
import { DESTINATIONCALENDAR_TITLE_FIELD } from "../destinationCalendar/DestinationCalendarTitle";
import { TEAM_TITLE_FIELD } from "../team/TeamTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <BooleanField
          label="Allow Dynamic Booking"
          source="allowDynamicBooking"
        />
        <TextField label="Avatar" source="avatar" />
        <BooleanField label="Away" source="away" />
        <TextField label="Bio" source="bio" />
        <TextField label="Brand Color" source="brandColor" />
        <TextField label="Buffer Time" source="bufferTime" />
        <BooleanField
          label="Completed Onboarding"
          source="completedOnboarding"
        />
        <DateField source="createdDate" label="Created Date" />
        <TextField label="Dark Brand Color" source="darkBrandColor" />
        <TextField label="Default Schedule Id" source="defaultScheduleId" />
        <ReferenceField
          label="Destination Calendar"
          source="destinationcalendar.id"
          reference="DestinationCalendar"
        >
          <TextField source={DESTINATIONCALENDAR_TITLE_FIELD} />
        </ReferenceField>
        <BooleanField
          label="Disable Impersonation"
          source="disableImpersonation"
        />
        <TextField label="Email" source="email" />
        <TextField label="Email Verified" source="emailVerified" />
        <TextField label="End Time" source="endTime" />
        <BooleanField label="Hide Branding" source="hideBranding" />
        <TextField label="ID" source="id" />
        <TextField label="Identity Provider" source="identityProvider" />
        <TextField label="Identity Provider Id" source="identityProviderId" />
        <TextField label="Invited To" source="invitedTo" />
        <TextField label="Locale" source="locale" />
        <TextField label="Metadata" source="metadata" />
        <TextField label="Name" source="name" />
        <TextField label="Password" source="password" />
        <TextField label="Plan" source="plan" />
        <TextField label="Role" source="role" />
        <TextField label="Start Time" source="startTime" />
        <TextField label="Theme" source="theme" />
        <TextField label="Time Format" source="timeFormat" />
        <TextField label="Time Zone" source="timeZone" />
        <TextField label="Trial Ends At" source="trialEndsAt" />
        <BooleanField label="Two Factor Enabled" source="twoFactorEnabled" />
        <TextField label="Two Factor Secret" source="twoFactorSecret" />
        <TextField label="Username" source="username" />
        <BooleanField label="Verified" source="verified" />
        <TextField label="Week Start" source="weekStart" />
        <ReferenceManyField
          reference="Account"
          target="userId"
          label="Accounts"
        >
          <Datagrid rowClick="show">
            <TextField label="Access Token" source="accessToken" />
            <TextField label="Expires At" source="expiresAt" />
            <TextField label="ID" source="id" />
            <TextField label="Id Token" source="idToken" />
            <TextField label="Provider" source="provider" />
            <TextField label="Provider Account Id" source="providerAccountId" />
            <TextField label="Refresh Token" source="refreshToken" />
            <TextField label="Scope" source="scope" />
            <TextField label="Session State" source="sessionState" />
            <TextField label="Token Type" source="tokenType" />
            <TextField label="Type Field" source="typeField" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="ApiKey" target="userId" label="ApiKeys">
          <Datagrid rowClick="show">
            <ReferenceField
              label="App Field"
              source="appmodel.id"
              reference="AppModel"
            >
              <TextField source={APPMODEL_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="Expires At" source="expiresAt" />
            <TextField label="Hashed Key" source="hashedKey" />
            <TextField label="ID" source="id" />
            <TextField label="Last Used At" source="lastUsedAt" />
            <TextField label="Note" source="note" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Availability"
          target="userId"
          label="Availabilities"
        >
          <Datagrid rowClick="show">
            <TextField label="Date" source="date" />
            <TextField label="Days" source="days" />
            <TextField label="End Time" source="endTime" />
            <ReferenceField
              label="Event Type"
              source="eventtype.id"
              reference="EventType"
            >
              <TextField source={EVENTTYPE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Schedule"
              source="schedule.id"
              reference="Schedule"
            >
              <TextField source={SCHEDULE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Start Time" source="startTime" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Booking"
          target="userId"
          label="Bookings"
        >
          <Datagrid rowClick="show">
            <TextField
              label="Cancellation Reason"
              source="cancellationReason"
            />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Custom Inputs" source="customInputs" />
            <ReferenceField
              label="Daily Ref"
              source="dailyeventreference.id"
              reference="DailyEventReference"
            >
              <TextField source={DAILYEVENTREFERENCE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Description" source="description" />
            <ReferenceField
              label="Destination Calendar"
              source="destinationcalendar.id"
              reference="DestinationCalendar"
            >
              <TextField source={DESTINATIONCALENDAR_TITLE_FIELD} />
            </ReferenceField>
            <TextField
              label="Dynamic Event Slug Ref"
              source="dynamicEventSlugRef"
            />
            <TextField
              label="Dynamic Group Slug Ref"
              source="dynamicGroupSlugRef"
            />
            <TextField label="End Time" source="endTime" />
            <ReferenceField
              label="Event Type"
              source="eventtype.id"
              reference="EventType"
            >
              <TextField source={EVENTTYPE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="From Reschedule" source="fromReschedule" />
            <TextField label="ID" source="id" />
            <TextField label="Location" source="location" />
            <BooleanField label="Paid" source="paid" />
            <TextField label="Recurring Event Id" source="recurringEventId" />
            <TextField label="Rejection Reason" source="rejectionReason" />
            <BooleanField label="Rescheduled" source="rescheduled" />
            <TextField label="Sms Reminder Number" source="smsReminderNumber" />
            <TextField label="Start Time" source="startTime" />
            <TextField label="Status" source="status" />
            <TextField label="Title" source="title" />
            <TextField label="Uid" source="uid" />
            <TextField label="Updated At" source="updatedAt" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Credential"
          target="userId"
          label="Credentials"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="App Field"
              source="appmodel.id"
              reference="AppModel"
            >
              <TextField source={APPMODEL_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="Key" source="key" />
            <TextField label="Type Field" source="typeField" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Feedback"
          target="userId"
          label="Feedbacks"
        >
          <Datagrid rowClick="show">
            <TextField label="Comment" source="comment" />
            <TextField label="Date" source="date" />
            <TextField label="ID" source="id" />
            <TextField label="Rating" source="rating" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Impersonation"
          target="impersonatedById"
          label="Impersonations"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Impersonated By"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Impersonated User"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Impersonation"
          target="impersonatedUserId"
          label="Impersonations"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Impersonated By"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Impersonated User"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Schedule"
          target="userId"
          label="Schedules"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <TextField label="Name" source="name" />
            <TextField label="Time Zone" source="timeZone" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="SelectedCalendar"
          target="userId"
          label="SelectedCalendars"
        >
          <Datagrid rowClick="show">
            <TextField label="External Id" source="externalId" />
            <TextField label="ID" source="id" />
            <TextField label="Integration" source="integration" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Session"
          target="userId"
          label="Sessions"
        >
          <Datagrid rowClick="show">
            <TextField label="Expires" source="expires" />
            <TextField label="ID" source="id" />
            <TextField label="Session Token" source="sessionToken" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Membership"
          target="userId"
          label="Memberships"
        >
          <Datagrid rowClick="show">
            <BooleanField label="Accepted" source="accepted" />
            <TextField label="ID" source="id" />
            <TextField label="Role" source="role" />
            <ReferenceField label="Team" source="team.id" reference="Team">
              <TextField source={TEAM_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Webhook"
          target="userId"
          label="Webhooks"
        >
          <Datagrid rowClick="show">
            <BooleanField label="Active" source="active" />
            <ReferenceField
              label="App Field"
              source="appmodel.id"
              reference="AppModel"
            >
              <TextField source={APPMODEL_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="Event Triggers" source="eventTriggers" />
            <ReferenceField
              label="Event Type"
              source="eventtype.id"
              reference="EventType"
            >
              <TextField source={EVENTTYPE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="Payload Template" source="payloadTemplate" />
            <TextField label="Secret" source="secret" />
            <TextField label="Subscriber Url" source="subscriberUrl" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Workflow"
          target="userId"
          label="Workflows"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <TextField label="Name" source="name" />
            <TextField label="Time" source="time" />
            <TextField label="Time Unit" source="timeUnit" />
            <TextField label="Trigger" source="trigger" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
