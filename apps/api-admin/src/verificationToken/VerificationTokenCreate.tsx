import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const VerificationTokenCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="Expires" source="expires" />
        <TextInput label="Identifier" source="identifier" />
        <TextInput label="Token" source="token" />
      </SimpleForm>
    </Create>
  );
};
