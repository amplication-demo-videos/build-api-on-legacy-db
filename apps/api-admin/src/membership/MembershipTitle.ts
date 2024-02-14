import { Membership as TMembership } from "../api/membership/Membership";

export const MEMBERSHIP_TITLE_FIELD = "id";

export const MembershipTitle = (record: TMembership): string => {
  return record.id?.toString() || String(record.id);
};
