import { VerificationTokenWhereInput } from "./VerificationTokenWhereInput";
import { VerificationTokenOrderByInput } from "./VerificationTokenOrderByInput";

export type VerificationTokenFindManyArgs = {
  where?: VerificationTokenWhereInput;
  orderBy?: Array<VerificationTokenOrderByInput>;
  skip?: number;
  take?: number;
};
