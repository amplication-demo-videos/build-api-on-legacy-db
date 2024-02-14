import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  NumberInput,
  SelectInput,
  ReferenceInput,
} from "react-admin";

import { WorkflowsOnEventTypeTitle } from "../workflowsOnEventType/WorkflowsOnEventTypeTitle";
import { WorkflowStepTitle } from "../workflowStep/WorkflowStepTitle";
import { UserTitle } from "../user/UserTitle";

export const WorkflowEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="activeOn"
          reference="WorkflowsOnEventType"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WorkflowsOnEventTypeTitle} />
        </ReferenceArrayInput>
        <TextInput label="Name" source="name" />
        <ReferenceArrayInput
          source="steps"
          reference="WorkflowStep"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WorkflowStepTitle} />
        </ReferenceArrayInput>
        <NumberInput step={1} label="Time" source="time" />
        <SelectInput
          source="timeUnit"
          label="Time Unit"
          choices={[
            { label: "DAY", value: "DAY" },
            { label: "HOUR", value: "HOUR" },
            { label: "MINUTE", value: "MINUTE" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <SelectInput
          source="trigger"
          label="Trigger"
          choices={[
            { label: "BEFORE_EVENT", value: "BEFORE_EVENT" },
            { label: "EVENT_CANCELLED", value: "EVENT_CANCELLED" },
            { label: "NEW_EVENT", value: "NEW_EVENT" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
