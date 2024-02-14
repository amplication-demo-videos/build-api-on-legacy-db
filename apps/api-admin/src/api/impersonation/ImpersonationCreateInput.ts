import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ImpersonationCreateInput = {
  impersonatedBy: UserWhereUniqueInput;
  impersonatedUser: UserWhereUniqueInput;
};
