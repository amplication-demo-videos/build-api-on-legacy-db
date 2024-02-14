import { EventType } from "../eventType/EventType";

export type HashedLink = {
  eventType?: EventType;
  id: number;
  link: string;
};
