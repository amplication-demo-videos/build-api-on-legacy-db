import { HashedLink as THashedLink } from "../api/hashedLink/HashedLink";

export const HASHEDLINK_TITLE_FIELD = "link";

export const HashedLinkTitle = (record: THashedLink): string => {
  return record.link?.toString() || String(record.id);
};
