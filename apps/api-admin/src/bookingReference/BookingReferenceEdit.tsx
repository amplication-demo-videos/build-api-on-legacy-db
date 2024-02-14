import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  BooleanInput,
  TextInput,
} from "react-admin";

import { BookingTitle } from "../booking/BookingTitle";

export const BookingReferenceEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="booking.id" reference="Booking" label="Booking">
          <SelectInput optionText={BookingTitle} />
        </ReferenceInput>
        <BooleanInput label="Deleted" source="deleted" />
        <TextInput label="External Calendar Id" source="externalCalendarId" />
        <TextInput label="Meeting Id" source="meetingId" />
        <TextInput label="Meeting Password" source="meetingPassword" />
        <TextInput label="Meeting Url" source="meetingUrl" />
        <TextInput label="Type Field" source="typeField" />
        <TextInput label="Uid" source="uid" />
      </SimpleForm>
    </Edit>
  );
};
