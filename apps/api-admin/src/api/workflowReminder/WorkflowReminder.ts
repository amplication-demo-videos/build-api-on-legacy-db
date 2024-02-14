import { Booking } from "../booking/Booking";
import { WorkflowStep } from "../workflowStep/WorkflowStep";

export type WorkflowReminder = {
  booking?: Booking | null;
  id: number;
  method?: "EMAIL" | "SMS";
  referenceId: string | null;
  scheduled: boolean;
  scheduledDate: Date;
  workflowStep?: WorkflowStep;
};
