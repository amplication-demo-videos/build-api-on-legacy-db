import * as graphql from "@nestjs/graphql";
import { PaymentResolverBase } from "./base/payment.resolver.base";
import { Payment } from "./base/Payment";
import { PaymentService } from "./payment.service";

@graphql.Resolver(() => Payment)
export class PaymentResolver extends PaymentResolverBase {
  constructor(protected readonly service: PaymentService) {
    super(service);
  }
}
