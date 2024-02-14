import { EventType as TEventType } from "../api/eventType/EventType";

export const EVENTTYPE_TITLE_FIELD = "eventName";

export const EventTypeTitle = (record: TEventType): string => {
  return record.eventName?.toString() || String(record.id);
};
