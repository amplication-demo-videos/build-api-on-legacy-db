import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ImpersonationUpdateInput = {
  impersonatedBy?: UserWhereUniqueInput;
  impersonatedUser?: UserWhereUniqueInput;
};
