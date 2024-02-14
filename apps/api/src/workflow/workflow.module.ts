import { Module } from "@nestjs/common";
import { WorkflowModuleBase } from "./base/workflow.module.base";
import { WorkflowService } from "./workflow.service";
import { WorkflowController } from "./workflow.controller";
import { WorkflowResolver } from "./workflow.resolver";

@Module({
  imports: [WorkflowModuleBase],
  controllers: [WorkflowController],
  providers: [WorkflowService, WorkflowResolver],
  exports: [WorkflowService],
})
export class WorkflowModule {}
