import { ReminderMailWhereInput } from "./ReminderMailWhereInput";
import { ReminderMailOrderByInput } from "./ReminderMailOrderByInput";

export type ReminderMailFindManyArgs = {
  where?: ReminderMailWhereInput;
  orderBy?: Array<ReminderMailOrderByInput>;
  skip?: number;
  take?: number;
};
