import { DateTimeFilter } from "../../util/DateTimeFilter";
import { IntFilter } from "../../util/IntFilter";

export type ReminderMailWhereInput = {
  createdAt?: DateTimeFilter;
  elapsedMinutes?: IntFilter;
  id?: IntFilter;
  referenceId?: IntFilter;
  reminderType?: "PENDING_BOOKING_CONFIRMATION";
};
