import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FeedbackService } from "./feedback.service";
import { FeedbackControllerBase } from "./base/feedback.controller.base";

@swagger.ApiTags("feedbacks")
@common.Controller("feedbacks")
export class FeedbackController extends FeedbackControllerBase {
  constructor(protected readonly service: FeedbackService) {
    super(service);
  }
}
