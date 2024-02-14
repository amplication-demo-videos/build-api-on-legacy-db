import { WorkflowsOnEventTypeCreateNestedManyWithoutWorkflowsInput } from "./WorkflowsOnEventTypeCreateNestedManyWithoutWorkflowsInput";
import { WorkflowStepCreateNestedManyWithoutWorkflowsInput } from "./WorkflowStepCreateNestedManyWithoutWorkflowsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WorkflowCreateInput = {
  activeOn?: WorkflowsOnEventTypeCreateNestedManyWithoutWorkflowsInput;
  name: string;
  steps?: WorkflowStepCreateNestedManyWithoutWorkflowsInput;
  time?: number | null;
  timeUnit?: "DAY" | "HOUR" | "MINUTE" | null;
  trigger: "BEFORE_EVENT" | "EVENT_CANCELLED" | "NEW_EVENT";
  user: UserWhereUniqueInput;
};
