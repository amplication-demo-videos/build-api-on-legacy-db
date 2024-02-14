import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const ReminderMailShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Elapsed Minutes" source="elapsedMinutes" />
        <TextField label="ID" source="id" />
        <TextField label="Reference Id" source="referenceId" />
        <TextField label="Reminder Type" source="reminderType" />
      </SimpleShowLayout>
    </Show>
  );
};
