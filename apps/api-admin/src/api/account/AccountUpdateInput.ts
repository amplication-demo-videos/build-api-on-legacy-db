import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AccountUpdateInput = {
  accessToken?: string | null;
  expiresAt?: number | null;
  idToken?: string | null;
  provider?: string;
  providerAccountId?: string;
  refreshToken?: string | null;
  scope?: string | null;
  sessionState?: string | null;
  tokenType?: string | null;
  typeField?: string;
  user?: UserWhereUniqueInput | null;
};
