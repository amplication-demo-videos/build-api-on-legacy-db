import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CredentialService } from "./credential.service";
import { CredentialControllerBase } from "./base/credential.controller.base";

@swagger.ApiTags("credentials")
@common.Controller("credentials")
export class CredentialController extends CredentialControllerBase {
  constructor(protected readonly service: CredentialService) {
    super(service);
  }
}
