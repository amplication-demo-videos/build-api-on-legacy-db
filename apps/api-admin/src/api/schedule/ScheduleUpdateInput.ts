import { AvailabilityUpdateManyWithoutSchedulesInput } from "./AvailabilityUpdateManyWithoutSchedulesInput";
import { EventTypeUpdateManyWithoutSchedulesInput } from "./EventTypeUpdateManyWithoutSchedulesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ScheduleUpdateInput = {
  availability?: AvailabilityUpdateManyWithoutSchedulesInput;
  eventType?: EventTypeUpdateManyWithoutSchedulesInput;
  name?: string;
  timeZone?: string | null;
  user?: UserWhereUniqueInput;
};
