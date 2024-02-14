import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
  BooleanField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { DAILYEVENTREFERENCE_TITLE_FIELD } from "../dailyEventReference/DailyEventReferenceTitle";
import { DESTINATIONCALENDAR_TITLE_FIELD } from "../destinationCalendar/DestinationCalendarTitle";
import { EVENTTYPE_TITLE_FIELD } from "../eventType/EventTypeTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const BookingList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Bookings"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
