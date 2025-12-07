import * as graphql from "@nestjs/graphql";
import { FdfdResolverBase } from "./base/fdfd.resolver.base";
import { Fdfd } from "./base/Fdfd";
import { FdfdService } from "./fdfd.service";

@graphql.Resolver(() => Fdfd)
export class FdfdResolver extends FdfdResolverBase {
  constructor(protected readonly service: FdfdService) {
    super(service);
  }
}
