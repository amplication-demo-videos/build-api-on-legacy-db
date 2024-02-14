import { WebhookWhereInput } from "./WebhookWhereInput";
import { WebhookOrderByInput } from "./WebhookOrderByInput";

export type WebhookFindManyArgs = {
  where?: WebhookWhereInput;
  orderBy?: Array<WebhookOrderByInput>;
  skip?: number;
  take?: number;
};
