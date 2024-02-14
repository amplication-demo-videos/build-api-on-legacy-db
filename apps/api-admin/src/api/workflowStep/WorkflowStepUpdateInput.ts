import { WorkflowWhereUniqueInput } from "../workflow/WorkflowWhereUniqueInput";
import { WorkflowReminderUpdateManyWithoutWorkflowStepsInput } from "./WorkflowReminderUpdateManyWithoutWorkflowStepsInput";

export type WorkflowStepUpdateInput = {
  action?: "EMAIL_HOST" | "EMAIL_ATTENDEE" | "SMS_ATTENDEE" | "SMS_NUMBER";
  emailSubject?: string | null;
  reminderBody?: string | null;
  sendTo?: string | null;
  stepNumber?: number;
  template?: "REMINDER" | "CUSTOM";
  workflow?: WorkflowWhereUniqueInput;
  workflowReminders?: WorkflowReminderUpdateManyWithoutWorkflowStepsInput;
};
