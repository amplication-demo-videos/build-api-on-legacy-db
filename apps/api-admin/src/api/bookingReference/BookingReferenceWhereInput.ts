import { BookingWhereUniqueInput } from "../booking/BookingWhereUniqueInput";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";

export type BookingReferenceWhereInput = {
  booking?: BookingWhereUniqueInput;
  deleted?: BooleanNullableFilter;
  externalCalendarId?: StringNullableFilter;
  id?: IntFilter;
  meetingId?: StringNullableFilter;
  meetingPassword?: StringNullableFilter;
  meetingUrl?: StringNullableFilter;
  typeField?: StringFilter;
  uid?: StringFilter;
};
