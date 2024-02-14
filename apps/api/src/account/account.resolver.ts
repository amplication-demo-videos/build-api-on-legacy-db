import * as graphql from "@nestjs/graphql";
import { AccountResolverBase } from "./base/account.resolver.base";
import { Account } from "./base/Account";
import { AccountService } from "./account.service";

@graphql.Resolver(() => Account)
export class AccountResolver extends AccountResolverBase {
  constructor(protected readonly service: AccountService) {
    super(service);
  }
}
