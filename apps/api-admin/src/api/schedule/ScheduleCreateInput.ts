import { AvailabilityCreateNestedManyWithoutSchedulesInput } from "./AvailabilityCreateNestedManyWithoutSchedulesInput";
import { EventTypeCreateNestedManyWithoutSchedulesInput } from "./EventTypeCreateNestedManyWithoutSchedulesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ScheduleCreateInput = {
  availability?: AvailabilityCreateNestedManyWithoutSchedulesInput;
  eventType?: EventTypeCreateNestedManyWithoutSchedulesInput;
  name: string;
  timeZone?: string | null;
  user: UserWhereUniqueInput;
};
