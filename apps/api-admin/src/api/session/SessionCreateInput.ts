import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SessionCreateInput = {
  expires: Date;
  sessionToken: string;
  user?: UserWhereUniqueInput | null;
};
