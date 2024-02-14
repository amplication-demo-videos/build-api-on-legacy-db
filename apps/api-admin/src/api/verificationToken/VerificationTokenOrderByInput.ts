import { SortOrder } from "../../util/SortOrder";

export type VerificationTokenOrderByInput = {
  createdAt?: SortOrder;
  expires?: SortOrder;
  id?: SortOrder;
  identifier?: SortOrder;
  token?: SortOrder;
  updatedAt?: SortOrder;
};
