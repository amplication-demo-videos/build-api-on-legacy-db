import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EventTypeCustomInputService } from "./eventTypeCustomInput.service";
import { EventTypeCustomInputControllerBase } from "./base/eventTypeCustomInput.controller.base";

@swagger.ApiTags("eventTypeCustomInputs")
@common.Controller("eventTypeCustomInputs")
export class EventTypeCustomInputController extends EventTypeCustomInputControllerBase {
  constructor(protected readonly service: EventTypeCustomInputService) {
    super(service);
  }
}
