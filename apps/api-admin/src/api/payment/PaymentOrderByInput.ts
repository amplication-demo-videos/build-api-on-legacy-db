import { SortOrder } from "../../util/SortOrder";

export type PaymentOrderByInput = {
  amount?: SortOrder;
  bookingId?: SortOrder;
  currency?: SortOrder;
  data?: SortOrder;
  externalId?: SortOrder;
  fee?: SortOrder;
  id?: SortOrder;
  refunded?: SortOrder;
  success?: SortOrder;
  type?: SortOrder;
  uid?: SortOrder;
};
