import { Module } from "@nestjs/common";
import { EventTypeCustomInputModuleBase } from "./base/eventTypeCustomInput.module.base";
import { EventTypeCustomInputService } from "./eventTypeCustomInput.service";
import { EventTypeCustomInputController } from "./eventTypeCustomInput.controller";
import { EventTypeCustomInputResolver } from "./eventTypeCustomInput.resolver";

@Module({
  imports: [EventTypeCustomInputModuleBase],
  controllers: [EventTypeCustomInputController],
  providers: [EventTypeCustomInputService, EventTypeCustomInputResolver],
  exports: [EventTypeCustomInputService],
})
export class EventTypeCustomInputModule {}
