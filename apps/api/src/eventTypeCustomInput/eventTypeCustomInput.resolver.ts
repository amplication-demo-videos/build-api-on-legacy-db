import * as graphql from "@nestjs/graphql";
import { EventTypeCustomInputResolverBase } from "./base/eventTypeCustomInput.resolver.base";
import { EventTypeCustomInput } from "./base/EventTypeCustomInput";
import { EventTypeCustomInputService } from "./eventTypeCustomInput.service";

@graphql.Resolver(() => EventTypeCustomInput)
export class EventTypeCustomInputResolver extends EventTypeCustomInputResolverBase {
  constructor(protected readonly service: EventTypeCustomInputService) {
    super(service);
  }
}
