import { EventType } from "../eventType/EventType";

export type EventTypeCustomInput = {
  eventType?: EventType;
  id: number;
  label: string;
  placeholder: string;
  required: boolean;
  type?: "TEXT" | "TEXTLONG" | "NUMBER" | "BOOL";
};
