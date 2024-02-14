import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AvailabilityServiceBase } from "./base/availability.service.base";

@Injectable()
export class AvailabilityService extends AvailabilityServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
