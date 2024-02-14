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

export const DailyEventReferenceEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="booking.id" reference="Booking" label="Booking">
          <SelectInput optionText={BookingTitle} />
        </ReferenceInput>
        <TextInput label="Dailytoken" source="dailytoken" />
        <TextInput label="Dailyurl" source="dailyurl" />
      </SimpleForm>
    </Edit>
  );
};
