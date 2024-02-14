import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WorkflowStepServiceBase } from "./base/workflowStep.service.base";

@Injectable()
export class WorkflowStepService extends WorkflowStepServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
