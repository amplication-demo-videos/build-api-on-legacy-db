import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ResetPasswordRequestServiceBase } from "./base/resetPasswordRequest.service.base";

@Injectable()
export class ResetPasswordRequestService extends ResetPasswordRequestServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
