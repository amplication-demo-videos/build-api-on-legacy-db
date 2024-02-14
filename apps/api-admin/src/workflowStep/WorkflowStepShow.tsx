import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
} from "react-admin";

import { BOOKING_TITLE_FIELD } from "../booking/BookingTitle";
import { WORKFLOWSTEP_TITLE_FIELD } from "./WorkflowStepTitle";
import { WORKFLOW_TITLE_FIELD } from "../workflow/WorkflowTitle";

export const WorkflowStepShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="WorkflowReminder"
          target="workflowStepId"
          label="WorkflowReminders"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Booking"
              source="booking.id"
              reference="Booking"
            >
              <TextField source={BOOKING_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="Method" source="method" />
            <TextField label="Reference Id" source="referenceId" />
            <BooleanField label="Scheduled" source="scheduled" />
            <TextField label="Scheduled Date" source="scheduledDate" />
            <ReferenceField
              label="Workflow Step"
              source="workflowstep.id"
              reference="WorkflowStep"
            >
              <TextField source={WORKFLOWSTEP_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
