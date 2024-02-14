import { SortOrder } from "../../util/SortOrder";

export type WebhookOrderByInput = {
  active?: SortOrder;
  appId?: SortOrder;
  createdAt?: SortOrder;
  eventTriggers?: SortOrder;
  eventTypeId?: SortOrder;
  id?: SortOrder;
  payloadTemplate?: SortOrder;
  secret?: SortOrder;
  subscriberUrl?: SortOrder;
  userId?: SortOrder;
};
