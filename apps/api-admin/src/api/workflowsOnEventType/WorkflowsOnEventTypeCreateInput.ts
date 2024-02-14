import { EventTypeWhereUniqueInput } from "../eventType/EventTypeWhereUniqueInput";
import { WorkflowWhereUniqueInput } from "../workflow/WorkflowWhereUniqueInput";

export type WorkflowsOnEventTypeCreateInput = {
  eventType: EventTypeWhereUniqueInput;
  workflow: WorkflowWhereUniqueInput;
};
