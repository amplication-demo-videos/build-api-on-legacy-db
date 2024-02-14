import { AppModelWhereUniqueInput } from "../appModel/AppModelWhereUniqueInput";
import { DestinationCalendarCreateNestedManyWithoutCredentialsInput } from "./DestinationCalendarCreateNestedManyWithoutCredentialsInput";
import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CredentialCreateInput = {
  appField?: AppModelWhereUniqueInput | null;
  destinationCalendars?: DestinationCalendarCreateNestedManyWithoutCredentialsInput;
  key: InputJsonValue;
  typeField: string;
  user?: UserWhereUniqueInput | null;
};
