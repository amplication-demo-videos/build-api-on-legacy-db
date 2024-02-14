import { BookingWhereUniqueInput } from "../booking/BookingWhereUniqueInput";

export type AttendeeCreateInput = {
  booking?: BookingWhereUniqueInput | null;
  email: string;
  locale?: string | null;
  name: string;
  timeZone: string;
};
