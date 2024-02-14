import * as graphql from "@nestjs/graphql";
import { VerificationTokenResolverBase } from "./base/verificationToken.resolver.base";
import { VerificationToken } from "./base/VerificationToken";
import { VerificationTokenService } from "./verificationToken.service";

@graphql.Resolver(() => VerificationToken)
export class VerificationTokenResolver extends VerificationTokenResolverBase {
  constructor(protected readonly service: VerificationTokenService) {
    super(service);
  }
}
