import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { WorkflowWhereUniqueInput } from "../workflow/WorkflowWhereUniqueInput";
import { WorkflowReminderListRelationFilter } from "../workflowReminder/WorkflowReminderListRelationFilter";

export type WorkflowStepWhereInput = {
  action?: "EMAIL_HOST" | "EMAIL_ATTENDEE" | "SMS_ATTENDEE" | "SMS_NUMBER";
  emailSubject?: StringNullableFilter;
  id?: IntFilter;
  reminderBody?: StringNullableFilter;
  sendTo?: StringNullableFilter;
  stepNumber?: IntFilter;
  template?: "REMINDER" | "CUSTOM";
  workflow?: WorkflowWhereUniqueInput;
  workflowReminders?: WorkflowReminderListRelationFilter;
};
