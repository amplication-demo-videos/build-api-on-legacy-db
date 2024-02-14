import { EventTypeWhereUniqueInput } from "../eventType/EventTypeWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";

export type EventTypeCustomInputWhereInput = {
  eventType?: EventTypeWhereUniqueInput;
  id?: IntFilter;
  label?: StringFilter;
  placeholder?: StringFilter;
  required?: BooleanFilter;
  type?: "TEXT" | "TEXTLONG" | "NUMBER" | "BOOL";
};
