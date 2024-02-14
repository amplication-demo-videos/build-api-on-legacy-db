import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  ReferenceInput,
  SelectInput,
  BooleanInput,
  DateTimeInput,
} from "react-admin";

import { AvailabilityTitle } from "../availability/AvailabilityTitle";
import { BookingTitle } from "../booking/BookingTitle";
import { EventTypeCustomInputTitle } from "../eventTypeCustomInput/EventTypeCustomInputTitle";
import { DestinationCalendarTitle } from "../destinationCalendar/DestinationCalendarTitle";
import { HashedLinkTitle } from "../hashedLink/HashedLinkTitle";
import { ScheduleTitle } from "../schedule/ScheduleTitle";
import { TeamTitle } from "../team/TeamTitle";
import { UserTitle } from "../user/UserTitle";
import { WebhookTitle } from "../webhook/WebhookTitle";
import { WorkflowsOnEventTypeTitle } from "../workflowsOnEventType/WorkflowsOnEventTypeTitle";

export const EventTypeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput
          step={1}
          label="After Event Buffer"
          source="afterEventBuffer"
        />
        <ReferenceArrayInput
          source="availability"
          reference="Availability"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AvailabilityTitle} />
        </ReferenceArrayInput>
        <NumberInput
          step={1}
          label="Before Event Buffer"
          source="beforeEventBuffer"
        />
        <ReferenceArrayInput
          source="bookings"
          reference="Booking"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={BookingTitle} />
        </ReferenceArrayInput>
        <TextInput label="Currency" source="currency" />
        <ReferenceArrayInput
          source="customInputs"
          reference="EventTypeCustomInput"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EventTypeCustomInputTitle} />
        </ReferenceArrayInput>
        <TextInput label="Description" source="description" />
        <ReferenceInput
          source="destinationCalendar.id"
          reference="DestinationCalendar"
          label="Destination Calendar"
        >
          <SelectInput optionText={DestinationCalendarTitle} />
        </ReferenceInput>
        <BooleanInput label="Disable Guests" source="disableGuests" />
        <TextInput label="Event Name" source="eventName" />
        <ReferenceInput
          source="hashedLink.id"
          reference="HashedLink"
          label="Hashed Link"
        >
          <SelectInput optionText={HashedLinkTitle} />
        </ReferenceInput>
        <BooleanInput label="Hidden" source="hidden" />
        <BooleanInput label="Hide Calendar Notes" source="hideCalendarNotes" />
        <NumberInput step={1} label="Length" source="length" />
        <div />
        <div />
        <NumberInput
          step={1}
          label="Minimum Booking Notice"
          source="minimumBookingNotice"
        />
        <BooleanInput
          label="Period Count Calendar Days"
          source="periodCountCalendarDays"
        />
        <NumberInput step={1} label="Period Days" source="periodDays" />
        <DateTimeInput label="Period End Date" source="periodEndDate" />
        <DateTimeInput label="Period Start Date" source="periodStartDate" />
        <SelectInput
          source="periodType"
          label="Period Type"
          choices={[
            { label: "UNLIMITED", value: "UNLIMITED" },
            { label: "ROLLING", value: "ROLLING" },
            { label: "RANGE", value: "RANGE" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <NumberInput step={1} label="Position" source="position" />
        <NumberInput step={1} label="Price" source="price" />
        <div />
        <BooleanInput
          label="Requires Confirmation"
          source="requiresConfirmation"
        />
        <ReferenceInput
          source="schedule.id"
          reference="Schedule"
          label="Schedule"
        >
          <SelectInput optionText={ScheduleTitle} />
        </ReferenceInput>
        <SelectInput
          source="schedulingType"
          label="Scheduling Type"
          choices={[
            { label: "ROUND_ROBIN", value: "ROUND_ROBIN" },
            { label: "COLLECTIVE", value: "COLLECTIVE" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <NumberInput
          step={1}
          label="Seats Per Time Slot"
          source="seatsPerTimeSlot"
        />
        <NumberInput step={1} label="Slot Interval" source="slotInterval" />
        <TextInput label="Slug" source="slug" />
        <TextInput label="Success Redirect Url" source="successRedirectUrl" />
        <ReferenceInput source="team.id" reference="Team" label="Team">
          <SelectInput optionText={TeamTitle} />
        </ReferenceInput>
        <TextInput label="Time Zone" source="timeZone" />
        <TextInput label="Title" source="title" />
        <NumberInput step={1} label="User Id" source="userId" />
        <ReferenceArrayInput
          source="users"
          reference="User"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="webhooks"
          reference="Webhook"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WebhookTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="workflows"
          reference="WorkflowsOnEventType"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WorkflowsOnEventTypeTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
