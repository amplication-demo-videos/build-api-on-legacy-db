import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";

export type ResetPasswordRequestWhereInput = {
  createdAt?: DateTimeFilter;
  email?: StringFilter;
  expires?: DateTimeFilter;
  id?: StringFilter;
  updatedAt?: DateTimeFilter;
};
