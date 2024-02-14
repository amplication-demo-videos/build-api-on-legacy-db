import { Booking } from "../booking/Booking";

export type Attendee = {
  booking?: Booking | null;
  email: string;
  id: number;
  locale: string | null;
  name: string;
  timeZone: string;
};
