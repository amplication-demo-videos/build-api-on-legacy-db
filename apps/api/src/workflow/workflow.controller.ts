import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { WorkflowService } from "./workflow.service";
import { WorkflowControllerBase } from "./base/workflow.controller.base";

@swagger.ApiTags("workflows")
@common.Controller("workflows")
export class WorkflowController extends WorkflowControllerBase {
  constructor(protected readonly service: WorkflowService) {
    super(service);
  }
}
