import { Workflow as TWorkflow } from "../api/workflow/Workflow";

export const WORKFLOW_TITLE_FIELD = "name";

export const WorkflowTitle = (record: TWorkflow): string => {
  return record.name?.toString() || String(record.id);
};
