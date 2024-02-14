import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DailyEventReferenceServiceBase } from "./base/dailyEventReference.service.base";

@Injectable()
export class DailyEventReferenceService extends DailyEventReferenceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
