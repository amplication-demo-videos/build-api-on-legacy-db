import { Module } from "@nestjs/common";
import { BookingReferenceModuleBase } from "./base/bookingReference.module.base";
import { BookingReferenceService } from "./bookingReference.service";
import { BookingReferenceController } from "./bookingReference.controller";
import { BookingReferenceResolver } from "./bookingReference.resolver";

@Module({
  imports: [BookingReferenceModuleBase],
  controllers: [BookingReferenceController],
  providers: [BookingReferenceService, BookingReferenceResolver],
  exports: [BookingReferenceService],
})
export class BookingReferenceModule {}
