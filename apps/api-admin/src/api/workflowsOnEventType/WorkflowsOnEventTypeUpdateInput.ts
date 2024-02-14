import { EventTypeWhereUniqueInput } from "../eventType/EventTypeWhereUniqueInput";
import { WorkflowWhereUniqueInput } from "../workflow/WorkflowWhereUniqueInput";

export type WorkflowsOnEventTypeUpdateInput = {
  eventType?: EventTypeWhereUniqueInput;
  workflow?: WorkflowWhereUniqueInput;
};
