import * as graphql from "@nestjs/graphql";
import { DestinationCalendarResolverBase } from "./base/destinationCalendar.resolver.base";
import { DestinationCalendar } from "./base/DestinationCalendar";
import { DestinationCalendarService } from "./destinationCalendar.service";

@graphql.Resolver(() => DestinationCalendar)
export class DestinationCalendarResolver extends DestinationCalendarResolverBase {
  constructor(protected readonly service: DestinationCalendarService) {
    super(service);
  }
}
