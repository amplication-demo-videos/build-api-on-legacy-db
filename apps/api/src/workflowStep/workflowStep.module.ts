import { Module } from "@nestjs/common";
import { WorkflowStepModuleBase } from "./base/workflowStep.module.base";
import { WorkflowStepService } from "./workflowStep.service";
import { WorkflowStepController } from "./workflowStep.controller";
import { WorkflowStepResolver } from "./workflowStep.resolver";

@Module({
  imports: [WorkflowStepModuleBase],
  controllers: [WorkflowStepController],
  providers: [WorkflowStepService, WorkflowStepResolver],
  exports: [WorkflowStepService],
})
export class WorkflowStepModule {}
