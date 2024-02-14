import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EventTypeCustomInputServiceBase } from "./base/eventTypeCustomInput.service.base";

@Injectable()
export class EventTypeCustomInputService extends EventTypeCustomInputServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
