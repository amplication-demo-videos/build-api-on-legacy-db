import { SortOrder } from "../../util/SortOrder";

export type ReminderMailOrderByInput = {
  createdAt?: SortOrder;
  elapsedMinutes?: SortOrder;
  id?: SortOrder;
  referenceId?: SortOrder;
  reminderType?: SortOrder;
};
