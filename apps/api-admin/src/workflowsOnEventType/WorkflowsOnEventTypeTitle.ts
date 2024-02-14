import { WorkflowsOnEventType as TWorkflowsOnEventType } from "../api/workflowsOnEventType/WorkflowsOnEventType";

export const WORKFLOWSONEVENTTYPE_TITLE_FIELD = "id";

export const WorkflowsOnEventTypeTitle = (
  record: TWorkflowsOnEventType
): string => {
  return record.id?.toString() || String(record.id);
};
