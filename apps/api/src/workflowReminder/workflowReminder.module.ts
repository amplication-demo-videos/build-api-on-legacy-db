import { Module } from "@nestjs/common";
import { WorkflowReminderModuleBase } from "./base/workflowReminder.module.base";
import { WorkflowReminderService } from "./workflowReminder.service";
import { WorkflowReminderController } from "./workflowReminder.controller";
import { WorkflowReminderResolver } from "./workflowReminder.resolver";

@Module({
  imports: [WorkflowReminderModuleBase],
  controllers: [WorkflowReminderController],
  providers: [WorkflowReminderService, WorkflowReminderResolver],
  exports: [WorkflowReminderService],
})
export class WorkflowReminderModule {}
