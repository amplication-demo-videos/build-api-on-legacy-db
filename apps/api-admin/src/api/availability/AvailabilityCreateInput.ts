import { EventTypeWhereUniqueInput } from "../eventType/EventTypeWhereUniqueInput";
import { ScheduleWhereUniqueInput } from "../schedule/ScheduleWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AvailabilityCreateInput = {
  date?: Date | null;
  days: number;
  endTime: Date;
  eventType?: EventTypeWhereUniqueInput | null;
  schedule?: ScheduleWhereUniqueInput | null;
  startTime: Date;
  user?: UserWhereUniqueInput | null;
};
