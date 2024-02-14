import { SortOrder } from "../../util/SortOrder";

export type BookingOrderByInput = {
  cancellationReason?: SortOrder;
  createdAt?: SortOrder;
  customInputs?: SortOrder;
  dailyRefId?: SortOrder;
  description?: SortOrder;
  destinationCalendarId?: SortOrder;
  dynamicEventSlugRef?: SortOrder;
  dynamicGroupSlugRef?: SortOrder;
  endTime?: SortOrder;
  eventTypeId?: SortOrder;
  fromReschedule?: SortOrder;
  id?: SortOrder;
  location?: SortOrder;
  paid?: SortOrder;
  recurringEventId?: SortOrder;
  rejectionReason?: SortOrder;
  rescheduled?: SortOrder;
  smsReminderNumber?: SortOrder;
  startTime?: SortOrder;
  status?: SortOrder;
  title?: SortOrder;
  uid?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
