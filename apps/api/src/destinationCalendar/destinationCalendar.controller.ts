import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DestinationCalendarService } from "./destinationCalendar.service";
import { DestinationCalendarControllerBase } from "./base/destinationCalendar.controller.base";

@swagger.ApiTags("destinationCalendars")
@common.Controller("destinationCalendars")
export class DestinationCalendarController extends DestinationCalendarControllerBase {
  constructor(protected readonly service: DestinationCalendarService) {
    super(service);
  }
}
