import { DestinationCalendarWhereInput } from "./DestinationCalendarWhereInput";
import { DestinationCalendarOrderByInput } from "./DestinationCalendarOrderByInput";

export type DestinationCalendarFindManyArgs = {
  where?: DestinationCalendarWhereInput;
  orderBy?: Array<DestinationCalendarOrderByInput>;
  skip?: number;
  take?: number;
};
