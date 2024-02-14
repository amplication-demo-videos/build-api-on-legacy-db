import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { HashedLinkService } from "./hashedLink.service";
import { HashedLinkControllerBase } from "./base/hashedLink.controller.base";

@swagger.ApiTags("hashedLinks")
@common.Controller("hashedLinks")
export class HashedLinkController extends HashedLinkControllerBase {
  constructor(protected readonly service: HashedLinkService) {
    super(service);
  }
}
