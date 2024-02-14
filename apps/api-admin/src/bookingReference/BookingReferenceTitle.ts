import { BookingReference as TBookingReference } from "../api/bookingReference/BookingReference";

export const BOOKINGREFERENCE_TITLE_FIELD = "externalCalendarId";

export const BookingReferenceTitle = (record: TBookingReference): string => {
  return record.externalCalendarId?.toString() || String(record.id);
};
