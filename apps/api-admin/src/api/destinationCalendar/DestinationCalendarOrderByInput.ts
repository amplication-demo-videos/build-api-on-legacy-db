import { SortOrder } from "../../util/SortOrder";

export type DestinationCalendarOrderByInput = {
  bookingId?: SortOrder;
  credentialId?: SortOrder;
  eventTypeId?: SortOrder;
  externalId?: SortOrder;
  id?: SortOrder;
  integration?: SortOrder;
  userId?: SortOrder;
};
