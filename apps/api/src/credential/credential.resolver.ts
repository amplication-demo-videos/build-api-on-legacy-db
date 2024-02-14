import * as graphql from "@nestjs/graphql";
import { CredentialResolverBase } from "./base/credential.resolver.base";
import { Credential } from "./base/Credential";
import { CredentialService } from "./credential.service";

@graphql.Resolver(() => Credential)
export class CredentialResolver extends CredentialResolverBase {
  constructor(protected readonly service: CredentialService) {
    super(service);
  }
}
