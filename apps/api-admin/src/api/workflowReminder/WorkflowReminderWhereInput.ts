import { BookingWhereUniqueInput } from "../booking/BookingWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { WorkflowStepWhereUniqueInput } from "../workflowStep/WorkflowStepWhereUniqueInput";

export type WorkflowReminderWhereInput = {
  booking?: BookingWhereUniqueInput;
  id?: IntFilter;
  method?: "EMAIL" | "SMS";
  referenceId?: StringNullableFilter;
  scheduled?: BooleanFilter;
  scheduledDate?: DateTimeFilter;
  workflowStep?: WorkflowStepWhereUniqueInput;
};
