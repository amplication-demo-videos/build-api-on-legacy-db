import { DateTimeFilter } from "../../util/DateTimeFilter";
import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";

export type VerificationTokenWhereInput = {
  createdAt?: DateTimeFilter;
  expires?: DateTimeFilter;
  id?: IntFilter;
  identifier?: StringFilter;
  token?: StringFilter;
  updatedAt?: DateTimeFilter;
};
