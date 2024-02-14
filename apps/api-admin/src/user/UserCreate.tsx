import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  BooleanInput,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { AccountTitle } from "../account/AccountTitle";
import { ApiKeyTitle } from "../apiKey/ApiKeyTitle";
import { AvailabilityTitle } from "../availability/AvailabilityTitle";
import { BookingTitle } from "../booking/BookingTitle";
import { CredentialTitle } from "../credential/CredentialTitle";
import { DestinationCalendarTitle } from "../destinationCalendar/DestinationCalendarTitle";
import { EventTypeTitle } from "../eventType/EventTypeTitle";
import { FeedbackTitle } from "../feedback/FeedbackTitle";
import { ImpersonationTitle } from "../impersonation/ImpersonationTitle";
import { ScheduleTitle } from "../schedule/ScheduleTitle";
import { SelectedCalendarTitle } from "../selectedCalendar/SelectedCalendarTitle";
import { SessionTitle } from "../session/SessionTitle";
import { MembershipTitle } from "../membership/MembershipTitle";
import { WebhookTitle } from "../webhook/WebhookTitle";
import { WorkflowTitle } from "../workflow/WorkflowTitle";

export const UserCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="accounts"
          reference="Account"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AccountTitle} />
        </ReferenceArrayInput>
        <BooleanInput
          label="Allow Dynamic Booking"
          source="allowDynamicBooking"
        />
        <ReferenceArrayInput
          source="apiKeys"
          reference="ApiKey"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ApiKeyTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="availability"
          reference="Availability"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AvailabilityTitle} />
        </ReferenceArrayInput>
        <TextInput label="Avatar" source="avatar" />
        <BooleanInput label="Away" source="away" />
        <TextInput label="Bio" source="bio" />
        <ReferenceArrayInput
          source="bookings"
          reference="Booking"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={BookingTitle} />
        </ReferenceArrayInput>
        <TextInput label="Brand Color" source="brandColor" />
        <NumberInput step={1} label="Buffer Time" source="bufferTime" />
        <BooleanInput
          label="Completed Onboarding"
          source="completedOnboarding"
        />
        <ReferenceArrayInput
          source="credentials"
          reference="Credential"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CredentialTitle} />
        </ReferenceArrayInput>
        <TextInput label="Dark Brand Color" source="darkBrandColor" />
        <NumberInput
          step={1}
          label="Default Schedule Id"
          source="defaultScheduleId"
        />
        <ReferenceInput
          source="destinationCalendar.id"
          reference="DestinationCalendar"
          label="Destination Calendar"
        >
          <SelectInput optionText={DestinationCalendarTitle} />
        </ReferenceInput>
        <BooleanInput
          label="Disable Impersonation"
          source="disableImpersonation"
        />
        <TextInput label="Email" source="email" />
        <DateTimeInput label="Email Verified" source="emailVerified" />
        <NumberInput step={1} label="End Time" source="endTime" />
        <ReferenceArrayInput
          source="eventTypes"
          reference="EventType"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EventTypeTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="feedback"
          reference="Feedback"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FeedbackTitle} />
        </ReferenceArrayInput>
        <BooleanInput label="Hide Branding" source="hideBranding" />
        <SelectInput
          source="identityProvider"
          label="Identity Provider"
          choices={[
            { label: "CAL", value: "CAL" },
            { label: "GOOGLE", value: "GOOGLE" },
            { label: "SAML", value: "SAML" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Identity Provider Id" source="identityProviderId" />
        <ReferenceArrayInput
          source="impersonatedBy"
          reference="Impersonation"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ImpersonationTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="impersonatedUsers"
          reference="Impersonation"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ImpersonationTitle} />
        </ReferenceArrayInput>
        <NumberInput step={1} label="Invited To" source="invitedTo" />
        <TextInput label="Locale" source="locale" />
        <div />
        <TextInput label="Name" source="name" />
        <TextInput label="Password" source="password" />
        <SelectInput
          source="plan"
          label="Plan"
          choices={[
            { label: "FREE", value: "FREE" },
            { label: "TRIAL", value: "TRIAL" },
            { label: "PRO", value: "PRO" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <SelectInput
          source="role"
          label="Role"
          choices={[
            { label: "USER", value: "USER" },
            { label: "ADMIN", value: "ADMIN" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <ReferenceArrayInput
          source="schedules"
          reference="Schedule"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ScheduleTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="selectedCalendars"
          reference="SelectedCalendar"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SelectedCalendarTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="sessions"
          reference="Session"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SessionTitle} />
        </ReferenceArrayInput>
        <NumberInput step={1} label="Start Time" source="startTime" />
        <ReferenceArrayInput
          source="teams"
          reference="Membership"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MembershipTitle} />
        </ReferenceArrayInput>
        <TextInput label="Theme" source="theme" />
        <NumberInput step={1} label="Time Format" source="timeFormat" />
        <TextInput label="Time Zone" source="timeZone" />
        <DateTimeInput label="Trial Ends At" source="trialEndsAt" />
        <BooleanInput label="Two Factor Enabled" source="twoFactorEnabled" />
        <TextInput label="Two Factor Secret" source="twoFactorSecret" />
        <TextInput label="Username" source="username" />
        <BooleanInput label="Verified" source="verified" />
        <ReferenceArrayInput
          source="webhooks"
          reference="Webhook"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WebhookTitle} />
        </ReferenceArrayInput>
        <TextInput label="Week Start" source="weekStart" />
        <ReferenceArrayInput
          source="workflows"
          reference="Workflow"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WorkflowTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
