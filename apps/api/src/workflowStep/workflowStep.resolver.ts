import * as graphql from "@nestjs/graphql";
import { WorkflowStepResolverBase } from "./base/workflowStep.resolver.base";
import { WorkflowStep } from "./base/WorkflowStep";
import { WorkflowStepService } from "./workflowStep.service";

@graphql.Resolver(() => WorkflowStep)
export class WorkflowStepResolver extends WorkflowStepResolverBase {
  constructor(protected readonly service: WorkflowStepService) {
    super(service);
  }
}
