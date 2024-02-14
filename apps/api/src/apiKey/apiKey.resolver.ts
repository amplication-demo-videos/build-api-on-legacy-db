import * as graphql from "@nestjs/graphql";
import { ApiKeyResolverBase } from "./base/apiKey.resolver.base";
import { ApiKey } from "./base/ApiKey";
import { ApiKeyService } from "./apiKey.service";

@graphql.Resolver(() => ApiKey)
export class ApiKeyResolver extends ApiKeyResolverBase {
  constructor(protected readonly service: ApiKeyService) {
    super(service);
  }
}
