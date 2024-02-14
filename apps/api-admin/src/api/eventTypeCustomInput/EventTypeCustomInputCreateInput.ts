import { EventTypeWhereUniqueInput } from "../eventType/EventTypeWhereUniqueInput";

export type EventTypeCustomInputCreateInput = {
  eventType: EventTypeWhereUniqueInput;
  label: string;
  placeholder: string;
  required: boolean;
  type: "TEXT" | "TEXTLONG" | "NUMBER" | "BOOL";
};
