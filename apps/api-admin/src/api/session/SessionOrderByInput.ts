import { SortOrder } from "../../util/SortOrder";

export type SessionOrderByInput = {
  expires?: SortOrder;
  id?: SortOrder;
  sessionToken?: SortOrder;
  userId?: SortOrder;
};
