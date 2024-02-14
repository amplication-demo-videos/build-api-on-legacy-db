import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BookingReferenceService } from "./bookingReference.service";
import { BookingReferenceControllerBase } from "./base/bookingReference.controller.base";

@swagger.ApiTags("bookingReferences")
@common.Controller("bookingReferences")
export class BookingReferenceController extends BookingReferenceControllerBase {
  constructor(protected readonly service: BookingReferenceService) {
    super(service);
  }
}
