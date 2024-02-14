import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { WorkflowStepService } from "./workflowStep.service";
import { WorkflowStepControllerBase } from "./base/workflowStep.controller.base";

@swagger.ApiTags("workflowSteps")
@common.Controller("workflowSteps")
export class WorkflowStepController extends WorkflowStepControllerBase {
  constructor(protected readonly service: WorkflowStepService) {
    super(service);
  }
}
