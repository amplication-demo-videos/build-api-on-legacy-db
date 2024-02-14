import { WorkflowWhereInput } from "./WorkflowWhereInput";
import { WorkflowOrderByInput } from "./WorkflowOrderByInput";

export type WorkflowFindManyArgs = {
  where?: WorkflowWhereInput;
  orderBy?: Array<WorkflowOrderByInput>;
  skip?: number;
  take?: number;
};
