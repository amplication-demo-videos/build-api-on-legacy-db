import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AppModelServiceBase } from "./base/appModel.service.base";

@Injectable()
export class AppModelService extends AppModelServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
