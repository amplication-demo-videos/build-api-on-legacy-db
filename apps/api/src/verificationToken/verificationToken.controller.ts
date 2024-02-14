import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { VerificationTokenService } from "./verificationToken.service";
import { VerificationTokenControllerBase } from "./base/verificationToken.controller.base";

@swagger.ApiTags("verificationTokens")
@common.Controller("verificationTokens")
export class VerificationTokenController extends VerificationTokenControllerBase {
  constructor(protected readonly service: VerificationTokenService) {
    super(service);
  }
}
