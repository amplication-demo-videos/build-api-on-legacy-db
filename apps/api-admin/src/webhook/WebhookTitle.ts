import { Webhook as TWebhook } from "../api/webhook/Webhook";

export const WEBHOOK_TITLE_FIELD = "payloadTemplate";

export const WebhookTitle = (record: TWebhook): string => {
  return record.payloadTemplate?.toString() || String(record.id);
};
