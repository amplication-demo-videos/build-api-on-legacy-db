import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FeedbackServiceBase } from "./base/feedback.service.base";

@Injectable()
export class FeedbackService extends FeedbackServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
