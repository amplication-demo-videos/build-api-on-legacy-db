import { Module } from "@nestjs/common";
import { FeedbackModuleBase } from "./base/feedback.module.base";
import { FeedbackService } from "./feedback.service";
import { FeedbackController } from "./feedback.controller";
import { FeedbackResolver } from "./feedback.resolver";

@Module({
  imports: [FeedbackModuleBase],
  controllers: [FeedbackController],
  providers: [FeedbackService, FeedbackResolver],
  exports: [FeedbackService],
})
export class FeedbackModule {}
