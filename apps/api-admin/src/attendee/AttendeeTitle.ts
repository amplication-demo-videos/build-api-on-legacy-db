import { Attendee as TAttendee } from "../api/attendee/Attendee";

export const ATTENDEE_TITLE_FIELD = "name";

export const AttendeeTitle = (record: TAttendee): string => {
  return record.name?.toString() || String(record.id);
};
