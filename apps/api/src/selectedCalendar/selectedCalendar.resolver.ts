import * as graphql from "@nestjs/graphql";
import { SelectedCalendarResolverBase } from "./base/selectedCalendar.resolver.base";
import { SelectedCalendar } from "./base/SelectedCalendar";
import { SelectedCalendarService } from "./selectedCalendar.service";

@graphql.Resolver(() => SelectedCalendar)
export class SelectedCalendarResolver extends SelectedCalendarResolverBase {
  constructor(protected readonly service: SelectedCalendarService) {
    super(service);
  }
}
