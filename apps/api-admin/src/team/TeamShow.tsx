import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { DESTINATIONCALENDAR_TITLE_FIELD } from "../destinationCalendar/DestinationCalendarTitle";
import { HASHEDLINK_TITLE_FIELD } from "../hashedLink/HashedLinkTitle";
import { SCHEDULE_TITLE_FIELD } from "../schedule/ScheduleTitle";
import { TEAM_TITLE_FIELD } from "./TeamTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const TeamShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Bio" source="bio" />
        <BooleanField label="Hide Branding" source="hideBranding" />
        <TextField label="ID" source="id" />
        <TextField label="Logo" source="logo" />
        <TextField label="Name" source="name" />
        <TextField label="Slug" source="slug" />
        <ReferenceManyField
          reference="EventType"
          target="teamId"
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
        <ReferenceManyField
          reference="Membership"
          target="teamId"
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
      </SimpleShowLayout>
    </Show>
  );
};
