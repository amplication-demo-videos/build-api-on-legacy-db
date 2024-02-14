import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WebhookServiceBase } from "./base/webhook.service.base";

@Injectable()
export class WebhookService extends WebhookServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
