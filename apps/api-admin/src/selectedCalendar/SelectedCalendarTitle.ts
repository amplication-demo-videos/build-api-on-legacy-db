import { SelectedCalendar as TSelectedCalendar } from "../api/selectedCalendar/SelectedCalendar";

export const SELECTEDCALENDAR_TITLE_FIELD = "externalId";

export const SelectedCalendarTitle = (record: TSelectedCalendar): string => {
  return record.externalId?.toString() || String(record.id);
};
