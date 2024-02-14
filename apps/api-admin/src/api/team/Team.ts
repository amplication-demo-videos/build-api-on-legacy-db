import { EventType } from "../eventType/EventType";
import { Membership } from "../membership/Membership";

export type Team = {
  bio: string | null;
  eventTypes?: Array<EventType>;
  hideBranding: boolean;
  id: number;
  logo: string | null;
  members?: Array<Membership>;
  name: string | null;
  slug: string | null;
};
