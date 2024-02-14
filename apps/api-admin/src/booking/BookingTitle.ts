import { Booking as TBooking } from "../api/booking/Booking";

export const BOOKING_TITLE_FIELD = "title";

export const BookingTitle = (record: TBooking): string => {
  return record.title?.toString() || String(record.id);
};
