import * as graphql from "@nestjs/graphql";
import { HashedLinkResolverBase } from "./base/hashedLink.resolver.base";
import { HashedLink } from "./base/HashedLink";
import { HashedLinkService } from "./hashedLink.service";

@graphql.Resolver(() => HashedLink)
export class HashedLinkResolver extends HashedLinkResolverBase {
  constructor(protected readonly service: HashedLinkService) {
    super(service);
  }
}
