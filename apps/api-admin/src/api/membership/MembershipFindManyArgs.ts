import { MembershipWhereInput } from "./MembershipWhereInput";
import { MembershipOrderByInput } from "./MembershipOrderByInput";

export type MembershipFindManyArgs = {
  where?: MembershipWhereInput;
  orderBy?: Array<MembershipOrderByInput>;
  skip?: number;
  take?: number;
};
