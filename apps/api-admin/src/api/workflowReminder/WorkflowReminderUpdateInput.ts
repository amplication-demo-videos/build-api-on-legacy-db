import { BookingWhereUniqueInput } from "../booking/BookingWhereUniqueInput";
import { WorkflowStepWhereUniqueInput } from "../workflowStep/WorkflowStepWhereUniqueInput";

export type WorkflowReminderUpdateInput = {
  booking?: BookingWhereUniqueInput | null;
  method?: "EMAIL" | "SMS";
  referenceId?: string | null;
  scheduled?: boolean;
  scheduledDate?: Date;
  workflowStep?: WorkflowStepWhereUniqueInput;
};
