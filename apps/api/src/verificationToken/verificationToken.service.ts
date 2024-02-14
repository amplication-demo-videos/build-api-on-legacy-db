import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { VerificationTokenServiceBase } from "./base/verificationToken.service.base";

@Injectable()
export class VerificationTokenService extends VerificationTokenServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
