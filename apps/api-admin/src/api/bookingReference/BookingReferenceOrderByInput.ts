import { SortOrder } from "../../util/SortOrder";

export type BookingReferenceOrderByInput = {
  bookingId?: SortOrder;
  deleted?: SortOrder;
  externalCalendarId?: SortOrder;
  id?: SortOrder;
  meetingId?: SortOrder;
  meetingPassword?: SortOrder;
  meetingUrl?: SortOrder;
  typeField?: SortOrder;
  uid?: SortOrder;
};
