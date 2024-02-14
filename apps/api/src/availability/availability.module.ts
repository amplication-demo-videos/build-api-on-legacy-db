import { Module } from "@nestjs/common";
import { AvailabilityModuleBase } from "./base/availability.module.base";
import { AvailabilityService } from "./availability.service";
import { AvailabilityController } from "./availability.controller";
import { AvailabilityResolver } from "./availability.resolver";

@Module({
  imports: [AvailabilityModuleBase],
  controllers: [AvailabilityController],
  providers: [AvailabilityService, AvailabilityResolver],
  exports: [AvailabilityService],
})
export class AvailabilityModule {}
