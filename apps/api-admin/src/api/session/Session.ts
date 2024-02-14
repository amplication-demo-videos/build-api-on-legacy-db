import { User } from "../user/User";

export type Session = {
  expires: Date;
  id: string;
  sessionToken: string;
  user?: User | null;
};
