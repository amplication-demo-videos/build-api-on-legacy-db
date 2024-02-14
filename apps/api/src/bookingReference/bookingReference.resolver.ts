import * as graphql from "@nestjs/graphql";
import { BookingReferenceResolverBase } from "./base/bookingReference.resolver.base";
import { BookingReference } from "./base/BookingReference";
import { BookingReferenceService } from "./bookingReference.service";

@graphql.Resolver(() => BookingReference)
export class BookingReferenceResolver extends BookingReferenceResolverBase {
  constructor(protected readonly service: BookingReferenceService) {
    super(service);
  }
}
