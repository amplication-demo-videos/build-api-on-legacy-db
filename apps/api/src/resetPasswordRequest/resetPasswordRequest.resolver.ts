import * as graphql from "@nestjs/graphql";
import { ResetPasswordRequestResolverBase } from "./base/resetPasswordRequest.resolver.base";
import { ResetPasswordRequest } from "./base/ResetPasswordRequest";
import { ResetPasswordRequestService } from "./resetPasswordRequest.service";

@graphql.Resolver(() => ResetPasswordRequest)
export class ResetPasswordRequestResolver extends ResetPasswordRequestResolverBase {
  constructor(protected readonly service: ResetPasswordRequestService) {
    super(service);
  }
}
