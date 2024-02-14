import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
} from "react-admin";

import { EVENTTYPE_TITLE_FIELD } from "../eventType/EventTypeTitle";
import { SCHEDULE_TITLE_FIELD } from "./ScheduleTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { DESTINATIONCALENDAR_TITLE_FIELD } from "../destinationCalendar/DestinationCalendarTitle";
import { HASHEDLINK_TITLE_FIELD } from "../hashedLink/HashedLinkTitle";
import { TEAM_TITLE_FIELD } from "../team/TeamTitle";

export const ScheduleShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Time Zone" source="timeZone" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="Availability"
          target="scheduleId"
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
          reference="EventType"
          target="scheduleId"
          label="EventTypes"
        >
          <Datagrid rowClick="show">
            <TextField label="After Event Buffer" source="afterEventBuffer" />
            <TextField label="Before Event Buffer" source="beforeEventBuffer" />
            <TextField label="Currency" source="currency" />
            <TextField label="Description" source="description" />
            <ReferenceField
              label="Destination Calendar"
              source="destinationcalendar.id"
              reference="DestinationCalendar"
            >
              <TextField source={DESTINATIONCALENDAR_TITLE_FIELD} />
            </ReferenceField>
            <BooleanField label="Disable Guests" source="disableGuests" />
            <TextField label="Event Name" source="eventName" />
            <ReferenceField
              label="Hashed Link"
              source="hashedlink.id"
              reference="HashedLink"
            >
              <TextField source={HASHEDLINK_TITLE_FIELD} />
            </ReferenceField>
            <BooleanField label="Hidden" source="hidden" />
            <BooleanField
              label="Hide Calendar Notes"
              source="hideCalendarNotes"
            />
            <TextField label="ID" source="id" />
            <TextField label="Length" source="length" />
            <TextField label="Locations" source="locations" />
            <TextField label="Metadata" source="metadata" />
            <TextField
              label="Minimum Booking Notice"
              source="minimumBookingNotice"
            />
            <BooleanField
              label="Period Count Calendar Days"
              source="periodCountCalendarDays"
            />
            <TextField label="Period Days" source="periodDays" />
            <TextField label="Period End Date" source="periodEndDate" />
            <TextField label="Period Start Date" source="periodStartDate" />
            <TextField label="Period Type" source="periodType" />
            <TextField label="Position" source="position" />
            <TextField label="Price" source="price" />
            <TextField label="Recurring Event" source="recurringEvent" />
            <BooleanField
              label="Requires Confirmation"
              source="requiresConfirmation"
            />
            <ReferenceField
              label="Schedule"
              source="schedule.id"
              reference="Schedule"
            >
              <TextField source={SCHEDULE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Scheduling Type" source="schedulingType" />
            <TextField label="Seats Per Time Slot" source="seatsPerTimeSlot" />
            <TextField label="Slot Interval" source="slotInterval" />
            <TextField label="Slug" source="slug" />
            <TextField
              label="Success Redirect Url"
              source="successRedirectUrl"
            />
            <ReferenceField label="Team" source="team.id" reference="Team">
              <TextField source={TEAM_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Time Zone" source="timeZone" />
            <TextField label="Title" source="title" />
            <TextField label="User Id" source="userId" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
