import { BookingWhereUniqueInput } from "../booking/BookingWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type AttendeeWhereInput = {
  booking?: BookingWhereUniqueInput;
  email?: StringFilter;
  id?: IntFilter;
  locale?: StringNullableFilter;
  name?: StringFilter;
  timeZone?: StringFilter;
};
