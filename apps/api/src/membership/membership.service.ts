import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MembershipServiceBase } from "./base/membership.service.base";

@Injectable()
export class MembershipService extends MembershipServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
