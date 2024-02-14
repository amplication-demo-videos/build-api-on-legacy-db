import { Module } from "@nestjs/common";
import { ImpersonationModuleBase } from "./base/impersonation.module.base";
import { ImpersonationService } from "./impersonation.service";
import { ImpersonationController } from "./impersonation.controller";
import { ImpersonationResolver } from "./impersonation.resolver";

@Module({
  imports: [ImpersonationModuleBase],
  controllers: [ImpersonationController],
  providers: [ImpersonationService, ImpersonationResolver],
  exports: [ImpersonationService],
})
export class ImpersonationModule {}
