import { Module } from "@nestjs/common";
import { ApiKeyModuleBase } from "./base/apiKey.module.base";
import { ApiKeyService } from "./apiKey.service";
import { ApiKeyController } from "./apiKey.controller";
import { ApiKeyResolver } from "./apiKey.resolver";

@Module({
  imports: [ApiKeyModuleBase],
  controllers: [ApiKeyController],
  providers: [ApiKeyService, ApiKeyResolver],
  exports: [ApiKeyService],
})
export class ApiKeyModule {}
