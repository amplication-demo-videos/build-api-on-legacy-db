import { SortOrder } from "../../util/SortOrder";

export type AvailabilityOrderByInput = {
  date?: SortOrder;
  days?: SortOrder;
  endTime?: SortOrder;
  eventTypeId?: SortOrder;
  id?: SortOrder;
  scheduleId?: SortOrder;
  startTime?: SortOrder;
  userId?: SortOrder;
};
