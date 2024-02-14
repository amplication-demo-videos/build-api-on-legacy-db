import { Booking } from "../booking/Booking";
import { JsonValue } from "type-fest";

export type Payment = {
  amount: number;
  booking?: Booking | null;
  currency: string;
  data: JsonValue;
  externalId: string;
  fee: number;
  id: number;
  refunded: boolean;
  success: boolean;
  type?: "STRIPE";
  uid: string;
};
