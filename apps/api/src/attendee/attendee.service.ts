import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AttendeeServiceBase } from "./base/attendee.service.base";

@Injectable()
export class AttendeeService extends AttendeeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
