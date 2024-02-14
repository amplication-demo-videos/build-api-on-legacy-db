import * as graphql from "@nestjs/graphql";
import { WorkflowReminderResolverBase } from "./base/workflowReminder.resolver.base";
import { WorkflowReminder } from "./base/WorkflowReminder";
import { WorkflowReminderService } from "./workflowReminder.service";

@graphql.Resolver(() => WorkflowReminder)
export class WorkflowReminderResolver extends WorkflowReminderResolverBase {
  constructor(protected readonly service: WorkflowReminderService) {
    super(service);
  }
}
