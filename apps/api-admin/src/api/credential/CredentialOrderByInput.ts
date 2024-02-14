import { SortOrder } from "../../util/SortOrder";

export type CredentialOrderByInput = {
  appId?: SortOrder;
  id?: SortOrder;
  key?: SortOrder;
  typeField?: SortOrder;
  userId?: SortOrder;
};
