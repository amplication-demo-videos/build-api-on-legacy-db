import { Module } from "@nestjs/common";
import { ResetPasswordRequestModuleBase } from "./base/resetPasswordRequest.module.base";
import { ResetPasswordRequestService } from "./resetPasswordRequest.service";
import { ResetPasswordRequestController } from "./resetPasswordRequest.controller";
import { ResetPasswordRequestResolver } from "./resetPasswordRequest.resolver";

@Module({
  imports: [ResetPasswordRequestModuleBase],
  controllers: [ResetPasswordRequestController],
  providers: [ResetPasswordRequestService, ResetPasswordRequestResolver],
  exports: [ResetPasswordRequestService],
})
export class ResetPasswordRequestModule {}
