import { Module } from "@nestjs/common";
import { WebhookModuleBase } from "./base/webhook.module.base";
import { WebhookService } from "./webhook.service";
import { WebhookController } from "./webhook.controller";
import { WebhookResolver } from "./webhook.resolver";

@Module({
  imports: [WebhookModuleBase],
  controllers: [WebhookController],
  providers: [WebhookService, WebhookResolver],
  exports: [WebhookService],
})
export class WebhookModule {}
