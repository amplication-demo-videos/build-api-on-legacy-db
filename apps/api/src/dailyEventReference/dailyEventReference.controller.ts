import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DailyEventReferenceService } from "./dailyEventReference.service";
import { DailyEventReferenceControllerBase } from "./base/dailyEventReference.controller.base";

@swagger.ApiTags("dailyEventReferences")
@common.Controller("dailyEventReferences")
export class DailyEventReferenceController extends DailyEventReferenceControllerBase {
  constructor(protected readonly service: DailyEventReferenceService) {
    super(service);
  }
}
