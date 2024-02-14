import { WorkflowWhereUniqueInput } from "../workflow/WorkflowWhereUniqueInput";
import { WorkflowReminderCreateNestedManyWithoutWorkflowStepsInput } from "./WorkflowReminderCreateNestedManyWithoutWorkflowStepsInput";

export type WorkflowStepCreateInput = {
  action: "EMAIL_HOST" | "EMAIL_ATTENDEE" | "SMS_ATTENDEE" | "SMS_NUMBER";
  emailSubject?: string | null;
  reminderBody?: string | null;
  sendTo?: string | null;
  stepNumber: number;
  template: "REMINDER" | "CUSTOM";
  workflow: WorkflowWhereUniqueInput;
  workflowReminders?: WorkflowReminderCreateNestedManyWithoutWorkflowStepsInput;
};
