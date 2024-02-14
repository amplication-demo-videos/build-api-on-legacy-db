import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  BooleanInput,
} from "react-admin";

import { AttendeeTitle } from "../attendee/AttendeeTitle";
import { DailyEventReferenceTitle } from "../dailyEventReference/DailyEventReferenceTitle";
import { DestinationCalendarTitle } from "../destinationCalendar/DestinationCalendarTitle";
import { EventTypeTitle } from "../eventType/EventTypeTitle";
import { PaymentTitle } from "../payment/PaymentTitle";
import { BookingReferenceTitle } from "../bookingReference/BookingReferenceTitle";
import { UserTitle } from "../user/UserTitle";
import { WorkflowReminderTitle } from "../workflowReminder/WorkflowReminderTitle";

export const BookingCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="attendees"
          reference="Attendee"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AttendeeTitle} />
        </ReferenceArrayInput>
        <TextInput label="Cancellation Reason" source="cancellationReason" />
        <div />
        <ReferenceInput
          source="dailyRef.id"
          reference="DailyEventReference"
          label="Daily Ref"
        >
          <SelectInput optionText={DailyEventReferenceTitle} />
        </ReferenceInput>
        <TextInput label="Description" source="description" />
        <ReferenceInput
          source="destinationCalendar.id"
          reference="DestinationCalendar"
          label="Destination Calendar"
        >
          <SelectInput optionText={DestinationCalendarTitle} />
        </ReferenceInput>
        <TextInput
          label="Dynamic Event Slug Ref"
          source="dynamicEventSlugRef"
        />
        <TextInput
          label="Dynamic Group Slug Ref"
          source="dynamicGroupSlugRef"
        />
        <DateTimeInput label="End Time" source="endTime" />
        <ReferenceInput
          source="eventType.id"
          reference="EventType"
          label="Event Type"
        >
          <SelectInput optionText={EventTypeTitle} />
        </ReferenceInput>
        <TextInput label="From Reschedule" source="fromReschedule" />
        <TextInput label="Location" source="location" />
        <BooleanInput label="Paid" source="paid" />
        <ReferenceArrayInput
          source="payment"
          reference="Payment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PaymentTitle} />
        </ReferenceArrayInput>
        <TextInput label="Recurring Event Id" source="recurringEventId" />
        <ReferenceArrayInput
          source="references"
          reference="BookingReference"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={BookingReferenceTitle} />
        </ReferenceArrayInput>
        <TextInput label="Rejection Reason" source="rejectionReason" />
        <BooleanInput label="Rescheduled" source="rescheduled" />
        <TextInput label="Sms Reminder Number" source="smsReminderNumber" />
        <DateTimeInput label="Start Time" source="startTime" />
        <SelectInput
          source="status"
          label="Status"
          choices={[
            { label: "CANCELLED", value: "CANCELLED" },
            { label: "ACCEPTED", value: "ACCEPTED" },
            { label: "REJECTED", value: "REJECTED" },
            { label: "PENDING", value: "PENDING" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Title" source="title" />
        <TextInput label="Uid" source="uid" />
        <DateTimeInput label="Updated At" source="updatedAt" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="workflowReminders"
          reference="WorkflowReminder"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WorkflowReminderTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
