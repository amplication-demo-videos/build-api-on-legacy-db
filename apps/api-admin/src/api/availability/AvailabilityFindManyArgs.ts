import { AvailabilityWhereInput } from "./AvailabilityWhereInput";
import { AvailabilityOrderByInput } from "./AvailabilityOrderByInput";

export type AvailabilityFindManyArgs = {
  where?: AvailabilityWhereInput;
  orderBy?: Array<AvailabilityOrderByInput>;
  skip?: number;
  take?: number;
};
