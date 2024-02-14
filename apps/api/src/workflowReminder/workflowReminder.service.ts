import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WorkflowReminderServiceBase } from "./base/workflowReminder.service.base";

@Injectable()
export class WorkflowReminderService extends WorkflowReminderServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
