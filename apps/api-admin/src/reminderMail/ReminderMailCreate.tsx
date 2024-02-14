import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  SelectInput,
} from "react-admin";

export const ReminderMailCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Elapsed Minutes" source="elapsedMinutes" />
        <NumberInput step={1} label="Reference Id" source="referenceId" />
        <SelectInput
          source="reminderType"
          label="Reminder Type"
          choices={[
            {
              label: "PENDING_BOOKING_CONFIRMATION",
              value: "PENDING_BOOKING_CONFIRMATION",
            },
          ]}
          optionText="label"
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
