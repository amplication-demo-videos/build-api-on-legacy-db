import { EventTypeCustomInput as TEventTypeCustomInput } from "../api/eventTypeCustomInput/EventTypeCustomInput";

export const EVENTTYPECUSTOMINPUT_TITLE_FIELD = "label";

export const EventTypeCustomInputTitle = (
  record: TEventTypeCustomInput
): string => {
  return record.label?.toString() || String(record.id);
};
