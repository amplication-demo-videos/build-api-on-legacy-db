import { EventTypeWhereUniqueInput } from "../eventType/EventTypeWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";
import { WorkflowWhereUniqueInput } from "../workflow/WorkflowWhereUniqueInput";

export type WorkflowsOnEventTypeWhereInput = {
  eventType?: EventTypeWhereUniqueInput;
  id?: IntFilter;
  workflow?: WorkflowWhereUniqueInput;
};
