import * as graphql from "@nestjs/graphql";
import { AvailabilityResolverBase } from "./base/availability.resolver.base";
import { Availability } from "./base/Availability";
import { AvailabilityService } from "./availability.service";

@graphql.Resolver(() => Availability)
export class AvailabilityResolver extends AvailabilityResolverBase {
  constructor(protected readonly service: AvailabilityService) {
    super(service);
  }
}
