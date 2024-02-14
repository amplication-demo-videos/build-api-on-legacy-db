import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SelectedCalendarServiceBase } from "./base/selectedCalendar.service.base";

@Injectable()
export class SelectedCalendarService extends SelectedCalendarServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
