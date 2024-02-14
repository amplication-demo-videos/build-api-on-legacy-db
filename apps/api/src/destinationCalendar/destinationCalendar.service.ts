import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DestinationCalendarServiceBase } from "./base/destinationCalendar.service.base";

@Injectable()
export class DestinationCalendarService extends DestinationCalendarServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
