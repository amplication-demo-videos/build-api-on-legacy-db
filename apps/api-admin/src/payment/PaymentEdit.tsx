import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  TextInput,
  BooleanInput,
} from "react-admin";

import { BookingTitle } from "../booking/BookingTitle";

export const PaymentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Amount" source="amount" />
        <ReferenceInput source="booking.id" reference="Booking" label="Booking">
          <SelectInput optionText={BookingTitle} />
        </ReferenceInput>
        <TextInput label="Currency" source="currency" />
        <div />
        <TextInput label="External Id" source="externalId" />
        <NumberInput step={1} label="Fee" source="fee" />
        <BooleanInput label="Refunded" source="refunded" />
        <BooleanInput label="Success" source="success" />
        <SelectInput
          source="type"
          label="Type"
          choices={[{ label: "STRIPE", value: "STRIPE" }]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Uid" source="uid" />
      </SimpleForm>
    </Edit>
  );
};
