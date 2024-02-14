import { EventTypeCreateNestedManyWithoutTeamsInput } from "./EventTypeCreateNestedManyWithoutTeamsInput";
import { MembershipCreateNestedManyWithoutTeamsInput } from "./MembershipCreateNestedManyWithoutTeamsInput";

export type TeamCreateInput = {
  bio?: string | null;
  eventTypes?: EventTypeCreateNestedManyWithoutTeamsInput;
  hideBranding: boolean;
  logo?: string | null;
  members?: MembershipCreateNestedManyWithoutTeamsInput;
  name?: string | null;
  slug?: string | null;
};
