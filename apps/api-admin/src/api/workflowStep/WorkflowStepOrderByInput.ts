import { SortOrder } from "../../util/SortOrder";

export type WorkflowStepOrderByInput = {
  action?: SortOrder;
  emailSubject?: SortOrder;
  id?: SortOrder;
  reminderBody?: SortOrder;
  sendTo?: SortOrder;
  stepNumber?: SortOrder;
  template?: SortOrder;
  workflowId?: SortOrder;
};
