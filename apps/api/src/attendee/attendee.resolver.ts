import * as graphql from "@nestjs/graphql";
import { AttendeeResolverBase } from "./base/attendee.resolver.base";
import { Attendee } from "./base/Attendee";
import { AttendeeService } from "./attendee.service";

@graphql.Resolver(() => Attendee)
export class AttendeeResolver extends AttendeeResolverBase {
  constructor(protected readonly service: AttendeeService) {
    super(service);
  }
}
