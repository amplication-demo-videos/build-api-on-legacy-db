import { BookingWhereUniqueInput } from "../booking/BookingWhereUniqueInput";

export type DailyEventReferenceCreateInput = {
  booking?: BookingWhereUniqueInput | null;
  dailytoken: string;
  dailyurl: string;
};
