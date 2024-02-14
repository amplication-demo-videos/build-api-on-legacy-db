import { EventTypeUpdateManyWithoutTeamsInput } from "./EventTypeUpdateManyWithoutTeamsInput";
import { MembershipUpdateManyWithoutTeamsInput } from "./MembershipUpdateManyWithoutTeamsInput";

export type TeamUpdateInput = {
  bio?: string | null;
  eventTypes?: EventTypeUpdateManyWithoutTeamsInput;
  hideBranding?: boolean;
  logo?: string | null;
  members?: MembershipUpdateManyWithoutTeamsInput;
  name?: string | null;
  slug?: string | null;
};
