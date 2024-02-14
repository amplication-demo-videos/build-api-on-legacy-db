import { Module } from "@nestjs/common";
import { ReminderMailModuleBase } from "./base/reminderMail.module.base";
import { ReminderMailService } from "./reminderMail.service";
import { ReminderMailController } from "./reminderMail.controller";
import { ReminderMailResolver } from "./reminderMail.resolver";

@Module({
  imports: [ReminderMailModuleBase],
  controllers: [ReminderMailController],
  providers: [ReminderMailService, ReminderMailResolver],
  exports: [ReminderMailService],
})
export class ReminderMailModule {}
