import { AppModelWhereUniqueInput } from "../appModel/AppModelWhereUniqueInput";
import { DestinationCalendarUpdateManyWithoutCredentialsInput } from "./DestinationCalendarUpdateManyWithoutCredentialsInput";
import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CredentialUpdateInput = {
  appField?: AppModelWhereUniqueInput | null;
  destinationCalendars?: DestinationCalendarUpdateManyWithoutCredentialsInput;
  key?: InputJsonValue;
  typeField?: string;
  user?: UserWhereUniqueInput | null;
};
