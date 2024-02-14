import { Workflow } from "../workflow/Workflow";
import { WorkflowReminder } from "../workflowReminder/WorkflowReminder";

export type WorkflowStep = {
  action?: "EMAIL_HOST" | "EMAIL_ATTENDEE" | "SMS_ATTENDEE" | "SMS_NUMBER";
  emailSubject: string | null;
  id: number;
  reminderBody: string | null;
  sendTo: string | null;
  stepNumber: number;
  template?: "REMINDER" | "CUSTOM";
  workflow?: Workflow;
  workflowReminders?: Array<WorkflowReminder>;
};
