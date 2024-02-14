import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EventTypeListRelationFilter } from "../eventType/EventTypeListRelationFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { IntFilter } from "../../util/IntFilter";
import { MembershipListRelationFilter } from "../membership/MembershipListRelationFilter";

export type TeamWhereInput = {
  bio?: StringNullableFilter;
  eventTypes?: EventTypeListRelationFilter;
  hideBranding?: BooleanFilter;
  id?: IntFilter;
  logo?: StringNullableFilter;
  members?: MembershipListRelationFilter;
  name?: StringNullableFilter;
  slug?: StringNullableFilter;
};
