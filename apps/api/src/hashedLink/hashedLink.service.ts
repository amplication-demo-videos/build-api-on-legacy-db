import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { HashedLinkServiceBase } from "./base/hashedLink.service.base";

@Injectable()
export class HashedLinkService extends HashedLinkServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
