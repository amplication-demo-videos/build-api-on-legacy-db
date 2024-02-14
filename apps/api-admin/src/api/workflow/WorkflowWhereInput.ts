import { WorkflowsOnEventTypeListRelationFilter } from "../workflowsOnEventType/WorkflowsOnEventTypeListRelationFilter";
import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";
import { WorkflowStepListRelationFilter } from "../workflowStep/WorkflowStepListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WorkflowWhereInput = {
  activeOn?: WorkflowsOnEventTypeListRelationFilter;
  id?: IntFilter;
  name?: StringFilter;
  steps?: WorkflowStepListRelationFilter;
  time?: IntNullableFilter;
  timeUnit?: "DAY" | "HOUR" | "MINUTE";
  trigger?: "BEFORE_EVENT" | "EVENT_CANCELLED" | "NEW_EVENT";
  user?: UserWhereUniqueInput;
};
