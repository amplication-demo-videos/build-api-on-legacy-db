import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { WorkflowsOnEventTypeService } from "./workflowsOnEventType.service";
import { WorkflowsOnEventTypeControllerBase } from "./base/workflowsOnEventType.controller.base";

@swagger.ApiTags("workflowsOnEventTypes")
@common.Controller("workflowsOnEventTypes")
export class WorkflowsOnEventTypeController extends WorkflowsOnEventTypeControllerBase {
  constructor(protected readonly service: WorkflowsOnEventTypeService) {
    super(service);
  }
}
