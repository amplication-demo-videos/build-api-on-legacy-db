import { SortOrder } from "../../util/SortOrder";

export type ImpersonationOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  impersonatedById?: SortOrder;
  impersonatedUserId?: SortOrder;
};
