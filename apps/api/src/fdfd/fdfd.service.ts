import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FdfdServiceBase } from "./base/fdfd.service.base";

@Injectable()
export class FdfdService extends FdfdServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
