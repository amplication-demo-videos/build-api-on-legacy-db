import * as graphql from "@nestjs/graphql";
import { AppModelResolverBase } from "./base/appModel.resolver.base";
import { AppModel } from "./base/AppModel";
import { AppModelService } from "./appModel.service";

@graphql.Resolver(() => AppModel)
export class AppModelResolver extends AppModelResolverBase {
  constructor(protected readonly service: AppModelService) {
    super(service);
  }
}
