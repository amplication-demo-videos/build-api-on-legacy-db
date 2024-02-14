import { SortOrder } from "../../util/SortOrder";

export type WorkflowReminderOrderByInput = {
  bookingUid?: SortOrder;
  id?: SortOrder;
  method?: SortOrder;
  referenceId?: SortOrder;
  scheduled?: SortOrder;
  scheduledDate?: SortOrder;
  workflowStepId?: SortOrder;
};
