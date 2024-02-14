import { BookingWhereUniqueInput } from "../booking/BookingWhereUniqueInput";

export type DailyEventReferenceUpdateInput = {
  booking?: BookingWhereUniqueInput | null;
  dailytoken?: string;
  dailyurl?: string;
};
