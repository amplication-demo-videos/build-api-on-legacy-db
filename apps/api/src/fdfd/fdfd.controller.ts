import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FdfdService } from "./fdfd.service";
import { FdfdControllerBase } from "./base/fdfd.controller.base";

@swagger.ApiTags("fdfds")
@common.Controller("fdfds")
export class FdfdController extends FdfdControllerBase {
  constructor(protected readonly service: FdfdService) {
    super(service);
  }
}
