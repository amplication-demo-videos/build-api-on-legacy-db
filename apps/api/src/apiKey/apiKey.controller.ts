import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ApiKeyService } from "./apiKey.service";
import { ApiKeyControllerBase } from "./base/apiKey.controller.base";

@swagger.ApiTags("apiKeys")
@common.Controller("apiKeys")
export class ApiKeyController extends ApiKeyControllerBase {
  constructor(protected readonly service: ApiKeyService) {
    super(service);
  }
}
