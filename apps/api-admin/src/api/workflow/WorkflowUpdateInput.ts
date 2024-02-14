import { WorkflowsOnEventTypeUpdateManyWithoutWorkflowsInput } from "./WorkflowsOnEventTypeUpdateManyWithoutWorkflowsInput";
import { WorkflowStepUpdateManyWithoutWorkflowsInput } from "./WorkflowStepUpdateManyWithoutWorkflowsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WorkflowUpdateInput = {
  activeOn?: WorkflowsOnEventTypeUpdateManyWithoutWorkflowsInput;
  name?: string;
  steps?: WorkflowStepUpdateManyWithoutWorkflowsInput;
  time?: number | null;
  timeUnit?: "DAY" | "HOUR" | "MINUTE" | null;
  trigger?: "BEFORE_EVENT" | "EVENT_CANCELLED" | "NEW_EVENT";
  user?: UserWhereUniqueInput;
};
