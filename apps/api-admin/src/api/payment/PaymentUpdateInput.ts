import { BookingWhereUniqueInput } from "../booking/BookingWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type PaymentUpdateInput = {
  amount?: number;
  booking?: BookingWhereUniqueInput | null;
  currency?: string;
  data?: InputJsonValue;
  externalId?: string;
  fee?: number;
  refunded?: boolean;
  success?: boolean;
  type?: "STRIPE";
  uid?: string;
};
