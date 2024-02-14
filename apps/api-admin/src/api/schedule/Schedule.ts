import { Availability } from "../availability/Availability";
import { EventType } from "../eventType/EventType";
import { User } from "../user/User";

export type Schedule = {
  availability?: Array<Availability>;
  eventType?: Array<EventType>;
  id: number;
  name: string;
  timeZone: string | null;
  user?: User;
};
