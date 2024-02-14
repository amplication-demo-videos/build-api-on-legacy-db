import { EventType } from "../eventType/EventType";
import { Workflow } from "../workflow/Workflow";

export type WorkflowsOnEventType = {
  eventType?: EventType;
  id: number;
  workflow?: Workflow;
};
