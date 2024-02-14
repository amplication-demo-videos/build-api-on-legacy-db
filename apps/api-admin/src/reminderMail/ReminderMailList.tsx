import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ReminderMailList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"ReminderMails"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="Elapsed Minutes" source="elapsedMinutes" />
        <TextField label="ID" source="id" />
        <TextField label="Reference Id" source="referenceId" />
        <TextField label="Reminder Type" source="reminderType" />
      </Datagrid>
    </List>
  );
};
