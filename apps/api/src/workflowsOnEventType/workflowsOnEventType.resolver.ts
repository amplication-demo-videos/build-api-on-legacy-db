import * as graphql from "@nestjs/graphql";
import { WorkflowsOnEventTypeResolverBase } from "./base/workflowsOnEventType.resolver.base";
import { WorkflowsOnEventType } from "./base/WorkflowsOnEventType";
import { WorkflowsOnEventTypeService } from "./workflowsOnEventType.service";

@graphql.Resolver(() => WorkflowsOnEventType)
export class WorkflowsOnEventTypeResolver extends WorkflowsOnEventTypeResolverBase {
  constructor(protected readonly service: WorkflowsOnEventTypeService) {
    super(service);
  }
}
