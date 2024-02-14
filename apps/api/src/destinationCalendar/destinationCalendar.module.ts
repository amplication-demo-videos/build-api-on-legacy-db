import { Module } from "@nestjs/common";
import { DestinationCalendarModuleBase } from "./base/destinationCalendar.module.base";
import { DestinationCalendarService } from "./destinationCalendar.service";
import { DestinationCalendarController } from "./destinationCalendar.controller";
import { DestinationCalendarResolver } from "./destinationCalendar.resolver";

@Module({
  imports: [DestinationCalendarModuleBase],
  controllers: [DestinationCalendarController],
  providers: [DestinationCalendarService, DestinationCalendarResolver],
  exports: [DestinationCalendarService],
})
export class DestinationCalendarModule {}
