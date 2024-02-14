import { User } from "../user/User";

export type Account = {
  accessToken: string | null;
  expiresAt: number | null;
  id: string;
  idToken: string | null;
  provider: string;
  providerAccountId: string;
  refreshToken: string | null;
  scope: string | null;
  sessionState: string | null;
  tokenType: string | null;
  typeField: string;
  user?: User | null;
};
