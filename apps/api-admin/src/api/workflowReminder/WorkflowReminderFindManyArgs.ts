import { WorkflowReminderWhereInput } from "./WorkflowReminderWhereInput";
import { WorkflowReminderOrderByInput } from "./WorkflowReminderOrderByInput";

export type WorkflowReminderFindManyArgs = {
  where?: WorkflowReminderWhereInput;
  orderBy?: Array<WorkflowReminderOrderByInput>;
  skip?: number;
  take?: number;
};
