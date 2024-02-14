import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SessionWhereInput = {
  expires?: DateTimeFilter;
  id?: StringFilter;
  sessionToken?: StringFilter;
  user?: UserWhereUniqueInput;
};
