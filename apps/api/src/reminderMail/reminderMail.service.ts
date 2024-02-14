import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ReminderMailServiceBase } from "./base/reminderMail.service.base";

@Injectable()
export class ReminderMailService extends ReminderMailServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
