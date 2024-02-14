import { Module } from "@nestjs/common";
import { WorkflowsOnEventTypeModuleBase } from "./base/workflowsOnEventType.module.base";
import { WorkflowsOnEventTypeService } from "./workflowsOnEventType.service";
import { WorkflowsOnEventTypeController } from "./workflowsOnEventType.controller";
import { WorkflowsOnEventTypeResolver } from "./workflowsOnEventType.resolver";

@Module({
  imports: [WorkflowsOnEventTypeModuleBase],
  controllers: [WorkflowsOnEventTypeController],
  providers: [WorkflowsOnEventTypeService, WorkflowsOnEventTypeResolver],
  exports: [WorkflowsOnEventTypeService],
})
export class WorkflowsOnEventTypeModule {}
