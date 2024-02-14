import { BookingWhereUniqueInput } from "../booking/BookingWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";

export type DailyEventReferenceWhereInput = {
  booking?: BookingWhereUniqueInput;
  dailytoken?: StringFilter;
  dailyurl?: StringFilter;
  id?: IntFilter;
};
