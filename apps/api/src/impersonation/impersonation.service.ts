import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ImpersonationServiceBase } from "./base/impersonation.service.base";

@Injectable()
export class ImpersonationService extends ImpersonationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
