import { SortOrder } from "../../util/SortOrder";

export type AttendeeOrderByInput = {
  bookingId?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  locale?: SortOrder;
  name?: SortOrder;
  timeZone?: SortOrder;
};
