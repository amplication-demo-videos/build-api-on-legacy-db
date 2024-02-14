import * as graphql from "@nestjs/graphql";
import { ReminderMailResolverBase } from "./base/reminderMail.resolver.base";
import { ReminderMail } from "./base/ReminderMail";
import { ReminderMailService } from "./reminderMail.service";

@graphql.Resolver(() => ReminderMail)
export class ReminderMailResolver extends ReminderMailResolverBase {
  constructor(protected readonly service: ReminderMailService) {
    super(service);
  }
}
