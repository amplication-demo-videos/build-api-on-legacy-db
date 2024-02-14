import { EventTypeWhereUniqueInput } from "../eventType/EventTypeWhereUniqueInput";

export type HashedLinkUpdateInput = {
  eventType?: EventTypeWhereUniqueInput;
  link?: string;
};
