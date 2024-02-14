import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { BOOKING_TITLE_FIELD } from "../booking/BookingTitle";
import { WORKFLOWSTEP_TITLE_FIELD } from "../workflowStep/WorkflowStepTitle";

export const WorkflowReminderList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"WorkflowReminders"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <ReferenceField label="Booking" source="booking.id" reference="Booking">
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
    </List>
  );
};
