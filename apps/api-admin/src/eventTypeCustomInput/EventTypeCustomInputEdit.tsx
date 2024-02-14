import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  BooleanInput,
} from "react-admin";

import { EventTypeTitle } from "../eventType/EventTypeTitle";

export const EventTypeCustomInputEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="eventType.id"
          reference="EventType"
          label="Event Type"
        >
          <SelectInput optionText={EventTypeTitle} />
        </ReferenceInput>
        <TextInput label="Label" source="label" />
        <TextInput label="Placeholder" source="placeholder" />
        <BooleanInput label="Required" source="required" />
        <SelectInput
          source="type"
          label="Type"
          choices={[
            { label: "TEXT", value: "TEXT" },
            { label: "TEXTLONG", value: "TEXTLONG" },
            { label: "NUMBER", value: "NUMBER" },
            { label: "BOOL", value: "BOOL" },
          ]}
          optionText="label"
          optionValue="value"
        />
      </SimpleForm>
    </Edit>
  );
};
