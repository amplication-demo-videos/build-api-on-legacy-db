import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const VerificationTokenEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="Expires" source="expires" />
        <TextInput label="Identifier" source="identifier" />
        <TextInput label="Token" source="token" />
      </SimpleForm>
    </Edit>
  );
};
