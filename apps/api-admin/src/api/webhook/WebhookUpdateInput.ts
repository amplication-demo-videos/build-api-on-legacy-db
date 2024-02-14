import { AppModelWhereUniqueInput } from "../appModel/AppModelWhereUniqueInput";
import { EventTypeWhereUniqueInput } from "../eventType/EventTypeWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WebhookUpdateInput = {
  active?: boolean;
  appField?: AppModelWhereUniqueInput | null;
  eventTriggers?: Array<
    "BOOKING_CREATED" | "BOOKING_RESCHEDULED" | "BOOKING_CANCELLED"
  >;
  eventType?: EventTypeWhereUniqueInput | null;
  payloadTemplate?: string | null;
  secret?: string | null;
  subscriberUrl?: string;
  user?: UserWhereUniqueInput | null;
};
