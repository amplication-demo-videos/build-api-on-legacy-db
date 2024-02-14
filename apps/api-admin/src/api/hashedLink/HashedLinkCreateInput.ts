import { EventTypeWhereUniqueInput } from "../eventType/EventTypeWhereUniqueInput";

export type HashedLinkCreateInput = {
  eventType: EventTypeWhereUniqueInput;
  link: string;
};
