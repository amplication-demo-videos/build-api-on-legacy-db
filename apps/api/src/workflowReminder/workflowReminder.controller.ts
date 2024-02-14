import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { WorkflowReminderService } from "./workflowReminder.service";
import { WorkflowReminderControllerBase } from "./base/workflowReminder.controller.base";

@swagger.ApiTags("workflowReminders")
@common.Controller("workflowReminders")
export class WorkflowReminderController extends WorkflowReminderControllerBase {
  constructor(protected readonly service: WorkflowReminderService) {
    super(service);
  }
}
