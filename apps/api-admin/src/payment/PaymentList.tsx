import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { BOOKING_TITLE_FIELD } from "../booking/BookingTitle";

export const PaymentList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Payments"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
