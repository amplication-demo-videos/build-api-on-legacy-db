import { DateTimeFilter } from "../../util/DateTimeFilter";
import { IntFilter } from "../../util/IntFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ImpersonationWhereInput = {
  createdAt?: DateTimeFilter;
  id?: IntFilter;
  impersonatedBy?: UserWhereUniqueInput;
  impersonatedUser?: UserWhereUniqueInput;
};
