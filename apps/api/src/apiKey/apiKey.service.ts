import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ApiKeyServiceBase } from "./base/apiKey.service.base";

@Injectable()
export class ApiKeyService extends ApiKeyServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
