import { TeamWhereUniqueInput } from "./TeamWhereUniqueInput";
import { TeamUpdateInput } from "./TeamUpdateInput";

export type UpdateTeamArgs = {
  where: TeamWhereUniqueInput;
  data: TeamUpdateInput;
};
