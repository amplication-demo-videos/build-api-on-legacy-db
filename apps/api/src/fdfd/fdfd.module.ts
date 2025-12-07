import { Module } from "@nestjs/common";
import { FdfdModuleBase } from "./base/fdfd.module.base";
import { FdfdService } from "./fdfd.service";
import { FdfdController } from "./fdfd.controller";
import { FdfdResolver } from "./fdfd.resolver";

@Module({
  imports: [FdfdModuleBase],
  controllers: [FdfdController],
  providers: [FdfdService, FdfdResolver],
  exports: [FdfdService],
})
export class FdfdModule {}
