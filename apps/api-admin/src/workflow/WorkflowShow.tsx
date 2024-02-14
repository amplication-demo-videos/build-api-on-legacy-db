import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { EVENTTYPE_TITLE_FIELD } from "../eventType/EventTypeTitle";
import { WORKFLOW_TITLE_FIELD } from "./WorkflowTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const WorkflowShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Time" source="time" />
        <TextField label="Time Unit" source="timeUnit" />
        <TextField label="Trigger" source="trigger" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="WorkflowsOnEventType"
          target="workflowId"
          label="WorkflowsOnEventTypes"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Event Type"
              source="eventtype.id"
              reference="EventType"
            >
              <TextField source={EVENTTYPE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Workflow"
              source="workflow.id"
              reference="Workflow"
            >
              <TextField source={WORKFLOW_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="WorkflowStep"
          target="workflowId"
          label="WorkflowSteps"
        >
          <Datagrid rowClick="show">
            <TextField label="Action" source="action" />
            <TextField label="Email Subject" source="emailSubject" />
            <TextField label="ID" source="id" />
            <TextField label="Reminder Body" source="reminderBody" />
            <TextField label="Send To" source="sendTo" />
            <TextField label="Step Number" source="stepNumber" />
            <TextField label="Template" source="template" />
            <ReferenceField
              label="Workflow"
              source="workflow.id"
              reference="Workflow"
            >
              <TextField source={WORKFLOW_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
