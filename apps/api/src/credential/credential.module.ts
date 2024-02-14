import { Module } from "@nestjs/common";
import { CredentialModuleBase } from "./base/credential.module.base";
import { CredentialService } from "./credential.service";
import { CredentialController } from "./credential.controller";
import { CredentialResolver } from "./credential.resolver";

@Module({
  imports: [CredentialModuleBase],
  controllers: [CredentialController],
  providers: [CredentialService, CredentialResolver],
  exports: [CredentialService],
})
export class CredentialModule {}
