export type ReminderMailCreateInput = {
  elapsedMinutes: number;
  referenceId: number;
  reminderType: "PENDING_BOOKING_CONFIRMATION";
};
