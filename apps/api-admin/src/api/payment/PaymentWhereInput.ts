import { IntFilter } from "../../util/IntFilter";
import { BookingWhereUniqueInput } from "../booking/BookingWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { BooleanFilter } from "../../util/BooleanFilter";

export type PaymentWhereInput = {
  amount?: IntFilter;
  booking?: BookingWhereUniqueInput;
  currency?: StringFilter;
  data?: JsonFilter;
  externalId?: StringFilter;
  fee?: IntFilter;
  id?: IntFilter;
  refunded?: BooleanFilter;
  success?: BooleanFilter;
  type?: "STRIPE";
  uid?: StringFilter;
};
