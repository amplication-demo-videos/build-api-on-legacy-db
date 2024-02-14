import * as graphql from "@nestjs/graphql";
import { DailyEventReferenceResolverBase } from "./base/dailyEventReference.resolver.base";
import { DailyEventReference } from "./base/DailyEventReference";
import { DailyEventReferenceService } from "./dailyEventReference.service";

@graphql.Resolver(() => DailyEventReference)
export class DailyEventReferenceResolver extends DailyEventReferenceResolverBase {
  constructor(protected readonly service: DailyEventReferenceService) {
    super(service);
  }
}
