import { ReminderMail as TReminderMail } from "../api/reminderMail/ReminderMail";

export const REMINDERMAIL_TITLE_FIELD = "id";

export const ReminderMailTitle = (record: TReminderMail): string => {
  return record.id?.toString() || String(record.id);
};
