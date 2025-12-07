import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  BooleanInput,
} from "react-admin";

import { EventTypeTitle } from "../eventType/EventTypeTitle";
import { MembershipTitle } from "../membership/MembershipTitle";

export const TeamEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Bio" source="bio" />
        <ReferenceArrayInput source="eventTypes" reference="EventType">
          <SelectArrayInput
            optionText={EventTypeTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <BooleanInput label="Hide Branding" source="hideBranding" />
        <TextInput label="Logo" source="logo" />
        <ReferenceArrayInput source="members" reference="Membership">
          <SelectArrayInput
            optionText={MembershipTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Name" source="name" />
        <TextInput label="Slug" source="slug" />
      </SimpleForm>
    </Edit>
  );
};
