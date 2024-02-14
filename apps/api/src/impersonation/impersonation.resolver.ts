import * as graphql from "@nestjs/graphql";
import { ImpersonationResolverBase } from "./base/impersonation.resolver.base";
import { Impersonation } from "./base/Impersonation";
import { ImpersonationService } from "./impersonation.service";

@graphql.Resolver(() => Impersonation)
export class ImpersonationResolver extends ImpersonationResolverBase {
  constructor(protected readonly service: ImpersonationService) {
    super(service);
  }
}
