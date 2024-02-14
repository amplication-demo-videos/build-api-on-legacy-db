import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { BookingTitle } from "../booking/BookingTitle";

export const AttendeeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="booking.id" reference="Booking" label="Booking">
          <SelectInput optionText={BookingTitle} />
        </ReferenceInput>
        <TextInput label="Email" source="email" />
        <TextInput label="Locale" source="locale" />
        <TextInput label="Name" source="name" />
        <TextInput label="Time Zone" source="timeZone" />
      </SimpleForm>
    </Edit>
  );
};
