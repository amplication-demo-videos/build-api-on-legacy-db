import { AppModelWhereUniqueInput } from "../appModel/AppModelWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ApiKeyUpdateInput = {
  appField?: AppModelWhereUniqueInput | null;
  expiresAt?: Date | null;
  hashedKey?: string;
  lastUsedAt?: Date | null;
  note?: string | null;
  user?: UserWhereUniqueInput | null;
};
