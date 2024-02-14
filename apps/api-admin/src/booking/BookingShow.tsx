import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { BOOKING_TITLE_FIELD } from "./BookingTitle";
import { WORKFLOWSTEP_TITLE_FIELD } from "../workflowStep/WorkflowStepTitle";
import { DAILYEVENTREFERENCE_TITLE_FIELD } from "../dailyEventReference/DailyEventReferenceTitle";
import { DESTINATIONCALENDAR_TITLE_FIELD } from "../destinationCalendar/DestinationCalendarTitle";
import { EVENTTYPE_TITLE_FIELD } from "../eventType/EventTypeTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const BookingShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Cancellation Reason" source="cancellationReason" />
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
        <ReferenceManyField
          reference="Attendee"
          target="bookingId"
          label="Attendees"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Booking"
              source="booking.id"
              reference="Booking"
            >
              <TextField source={BOOKING_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Email" source="email" />
            <TextField label="ID" source="id" />
            <TextField label="Locale" source="locale" />
            <TextField label="Name" source="name" />
            <TextField label="Time Zone" source="timeZone" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Payment"
          target="bookingId"
          label="Payments"
        >
          <Datagrid rowClick="show">
            <TextField label="Amount" source="amount" />
            <ReferenceField
              label="Booking"
              source="booking.id"
              reference="Booking"
            >
              <TextField source={BOOKING_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Currency" source="currency" />
            <TextField label="Data" source="data" />
            <TextField label="External Id" source="externalId" />
            <TextField label="Fee" source="fee" />
            <TextField label="ID" source="id" />
            <BooleanField label="Refunded" source="refunded" />
            <BooleanField label="Success" source="success" />
            <TextField label="Type" source="type" />
            <TextField label="Uid" source="uid" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="BookingReference"
          target="bookingId"
          label="BookingReferences"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Booking"
              source="booking.id"
              reference="Booking"
            >
              <TextField source={BOOKING_TITLE_FIELD} />
            </ReferenceField>
            <BooleanField label="Deleted" source="deleted" />
            <TextField
              label="External Calendar Id"
              source="externalCalendarId"
            />
            <TextField label="ID" source="id" />
            <TextField label="Meeting Id" source="meetingId" />
            <TextField label="Meeting Password" source="meetingPassword" />
            <TextField label="Meeting Url" source="meetingUrl" />
            <TextField label="Type Field" source="typeField" />
            <TextField label="Uid" source="uid" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="WorkflowReminder"
          target="bookingUid"
          label="WorkflowReminders"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Booking"
              source="booking.id"
              reference="Booking"
            >
              <TextField source={BOOKING_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="Method" source="method" />
            <TextField label="Reference Id" source="referenceId" />
            <BooleanField label="Scheduled" source="scheduled" />
            <TextField label="Scheduled Date" source="scheduledDate" />
            <ReferenceField
              label="Workflow Step"
              source="workflowstep.id"
              reference="WorkflowStep"
            >
              <TextField source={WORKFLOWSTEP_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
