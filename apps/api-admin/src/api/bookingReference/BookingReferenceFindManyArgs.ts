import { BookingReferenceWhereInput } from "./BookingReferenceWhereInput";
import { BookingReferenceOrderByInput } from "./BookingReferenceOrderByInput";

export type BookingReferenceFindManyArgs = {
  where?: BookingReferenceWhereInput;
  orderBy?: Array<BookingReferenceOrderByInput>;
  skip?: number;
  take?: number;
};
