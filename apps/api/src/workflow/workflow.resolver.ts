import * as graphql from "@nestjs/graphql";
import { WorkflowResolverBase } from "./base/workflow.resolver.base";
import { Workflow } from "./base/Workflow";
import { WorkflowService } from "./workflow.service";

@graphql.Resolver(() => Workflow)
export class WorkflowResolver extends WorkflowResolverBase {
  constructor(protected readonly service: WorkflowService) {
    super(service);
  }
}
