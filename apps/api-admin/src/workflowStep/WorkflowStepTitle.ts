import { WorkflowStep as TWorkflowStep } from "../api/workflowStep/WorkflowStep";

export const WORKFLOWSTEP_TITLE_FIELD = "emailSubject";

export const WorkflowStepTitle = (record: TWorkflowStep): string => {
  return record.emailSubject?.toString() || String(record.id);
};
