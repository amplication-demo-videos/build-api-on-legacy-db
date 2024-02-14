import { WorkflowReminder as TWorkflowReminder } from "../api/workflowReminder/WorkflowReminder";

export const WORKFLOWREMINDER_TITLE_FIELD = "referenceId";

export const WorkflowReminderTitle = (record: TWorkflowReminder): string => {
  return record.referenceId?.toString() || String(record.id);
};
