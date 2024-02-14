import { Team } from "../team/Team";
import { User } from "../user/User";

export type Membership = {
  accepted: boolean;
  id: number;
  role?: "MEMBER" | "ADMIN" | "OWNER";
  team?: Team;
  user?: User;
};
