import { DestinationCalendar as TDestinationCalendar } from "../api/destinationCalendar/DestinationCalendar";

export const DESTINATIONCALENDAR_TITLE_FIELD = "externalId";

export const DestinationCalendarTitle = (
  record: TDestinationCalendar
): string => {
  return record.externalId?.toString() || String(record.id);
};
