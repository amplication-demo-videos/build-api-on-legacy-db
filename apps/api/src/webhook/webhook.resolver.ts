import * as graphql from "@nestjs/graphql";
import { WebhookResolverBase } from "./base/webhook.resolver.base";
import { Webhook } from "./base/Webhook";
import { WebhookService } from "./webhook.service";

@graphql.Resolver(() => Webhook)
export class WebhookResolver extends WebhookResolverBase {
  constructor(protected readonly service: WebhookService) {
    super(service);
  }
}
