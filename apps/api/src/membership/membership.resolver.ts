import * as graphql from "@nestjs/graphql";
import { MembershipResolverBase } from "./base/membership.resolver.base";
import { Membership } from "./base/Membership";
import { MembershipService } from "./membership.service";

@graphql.Resolver(() => Membership)
export class MembershipResolver extends MembershipResolverBase {
  constructor(protected readonly service: MembershipService) {
    super(service);
  }
}
