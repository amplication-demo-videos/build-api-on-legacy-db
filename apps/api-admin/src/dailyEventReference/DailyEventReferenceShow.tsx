import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
} from "react-admin";
import { BOOKING_TITLE_FIELD } from "../booking/BookingTitle";

export const DailyEventReferenceShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="Booking" source="booking.id" reference="Booking">
          <TextField source={BOOKING_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Dailytoken" source="dailytoken" />
        <TextField label="Dailyurl" source="dailyurl" />
        <TextField label="ID" source="id" />
      </SimpleShowLayout>
    </Show>
  );
};
