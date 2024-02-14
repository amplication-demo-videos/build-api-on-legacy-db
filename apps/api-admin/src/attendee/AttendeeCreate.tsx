import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { BookingTitle } from "../booking/BookingTitle";

export const AttendeeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="booking.id" reference="Booking" label="Booking">
          <SelectInput optionText={BookingTitle} />
        </ReferenceInput>
        <TextInput label="Email" source="email" />
        <TextInput label="Locale" source="locale" />
        <TextInput label="Name" source="name" />
        <TextInput label="Time Zone" source="timeZone" />
      </SimpleForm>
    </Create>
  );
};
