export type ReminderMail = {
  createdAt: Date;
  elapsedMinutes: number;
  id: number;
  referenceId: number;
  reminderType?: "PENDING_BOOKING_CONFIRMATION";
};
