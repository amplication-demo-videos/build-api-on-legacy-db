import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SelectedCalendarCreateInput = {
  externalId: string;
  integration: string;
  user: UserWhereUniqueInput;
};
