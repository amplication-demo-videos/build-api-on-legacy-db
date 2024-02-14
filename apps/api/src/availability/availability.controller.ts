import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AvailabilityService } from "./availability.service";
import { AvailabilityControllerBase } from "./base/availability.controller.base";

@swagger.ApiTags("availabilities")
@common.Controller("availabilities")
export class AvailabilityController extends AvailabilityControllerBase {
  constructor(protected readonly service: AvailabilityService) {
    super(service);
  }
}
