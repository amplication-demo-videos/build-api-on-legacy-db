import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BookingReferenceServiceBase } from "./base/bookingReference.service.base";

@Injectable()
export class BookingReferenceService extends BookingReferenceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
