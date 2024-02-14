import { BookingWhereUniqueInput } from "../booking/BookingWhereUniqueInput";

export type AttendeeUpdateInput = {
  booking?: BookingWhereUniqueInput | null;
  email?: string;
  locale?: string | null;
  name?: string;
  timeZone?: string;
};
