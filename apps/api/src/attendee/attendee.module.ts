import { Module } from "@nestjs/common";
import { AttendeeModuleBase } from "./base/attendee.module.base";
import { AttendeeService } from "./attendee.service";
import { AttendeeController } from "./attendee.controller";
import { AttendeeResolver } from "./attendee.resolver";

@Module({
  imports: [AttendeeModuleBase],
  controllers: [AttendeeController],
  providers: [AttendeeService, AttendeeResolver],
  exports: [AttendeeService],
})
export class AttendeeModule {}
