import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { EVENTTYPE_TITLE_FIELD } from "../eventType/EventTypeTitle";
import { WORKFLOW_TITLE_FIELD } from "../workflow/WorkflowTitle";

export const WorkflowsOnEventTypeList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"WorkflowsOnEventTypes"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
