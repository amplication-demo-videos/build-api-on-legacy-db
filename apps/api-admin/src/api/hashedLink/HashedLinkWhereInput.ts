import { EventTypeWhereUniqueInput } from "../eventType/EventTypeWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";

export type HashedLinkWhereInput = {
  eventType?: EventTypeWhereUniqueInput;
  id?: IntFilter;
  link?: StringFilter;
};
