import { Booking } from "../booking/Booking";

export type BookingReference = {
  booking?: Booking | null;
  deleted: boolean | null;
  externalCalendarId: string | null;
  id: number;
  meetingId: string | null;
  meetingPassword: string | null;
  meetingUrl: string | null;
  typeField: string;
  uid: string;
};
