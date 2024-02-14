import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SelectedCalendarWhereInput = {
  externalId?: StringFilter;
  id?: IntFilter;
  integration?: StringFilter;
  user?: UserWhereUniqueInput;
};
