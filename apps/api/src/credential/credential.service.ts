import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CredentialServiceBase } from "./base/credential.service.base";

@Injectable()
export class CredentialService extends CredentialServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
