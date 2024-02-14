import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WorkflowServiceBase } from "./base/workflow.service.base";

@Injectable()
export class WorkflowService extends WorkflowServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
