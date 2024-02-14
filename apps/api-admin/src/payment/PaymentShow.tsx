import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  BooleanField,
} from "react-admin";
import { BOOKING_TITLE_FIELD } from "../booking/BookingTitle";

export const PaymentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Amount" source="amount" />
        <ReferenceField label="Booking" source="booking.id" reference="Booking">
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
      </SimpleShowLayout>
    </Show>
  );
};
