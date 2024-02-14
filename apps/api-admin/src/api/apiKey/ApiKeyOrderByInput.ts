import { SortOrder } from "../../util/SortOrder";

export type ApiKeyOrderByInput = {
  appId?: SortOrder;
  createdAt?: SortOrder;
  expiresAt?: SortOrder;
  hashedKey?: SortOrder;
  id?: SortOrder;
  lastUsedAt?: SortOrder;
  note?: SortOrder;
  userId?: SortOrder;
};
