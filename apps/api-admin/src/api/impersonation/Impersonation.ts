import { User } from "../user/User";

export type Impersonation = {
  createdAt: Date;
  id: number;
  impersonatedBy?: User;
  impersonatedUser?: User;
};
