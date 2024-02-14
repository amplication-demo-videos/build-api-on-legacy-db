import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SessionUpdateInput = {
  expires?: Date;
  sessionToken?: string;
  user?: UserWhereUniqueInput | null;
};
