import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WorkflowsOnEventTypeServiceBase } from "./base/workflowsOnEventType.service.base";

@Injectable()
export class WorkflowsOnEventTypeService extends WorkflowsOnEventTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
