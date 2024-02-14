import { AttendeeWhereInput } from "./AttendeeWhereInput";
import { AttendeeOrderByInput } from "./AttendeeOrderByInput";

export type AttendeeFindManyArgs = {
  where?: AttendeeWhereInput;
  orderBy?: Array<AttendeeOrderByInput>;
  skip?: number;
  take?: number;
};
