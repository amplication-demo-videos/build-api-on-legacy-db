import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FeedbackWhereInput = {
  comment?: StringNullableFilter;
  date?: DateTimeFilter;
  id?: IntFilter;
  rating?: StringFilter;
  user?: UserWhereUniqueInput;
};
