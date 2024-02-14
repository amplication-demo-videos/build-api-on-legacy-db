import * as graphql from "@nestjs/graphql";
import { FeedbackResolverBase } from "./base/feedback.resolver.base";
import { Feedback } from "./base/Feedback";
import { FeedbackService } from "./feedback.service";

@graphql.Resolver(() => Feedback)
export class FeedbackResolver extends FeedbackResolverBase {
  constructor(protected readonly service: FeedbackService) {
    super(service);
  }
}
