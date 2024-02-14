import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SelectedCalendarUpdateInput = {
  externalId?: string;
  integration?: string;
  user?: UserWhereUniqueInput;
};
