import { WorkflowStepWhereInput } from "./WorkflowStepWhereInput";
import { WorkflowStepOrderByInput } from "./WorkflowStepOrderByInput";

export type WorkflowStepFindManyArgs = {
  where?: WorkflowStepWhereInput;
  orderBy?: Array<WorkflowStepOrderByInput>;
  skip?: number;
  take?: number;
};
