import { ImpersonationWhereInput } from "./ImpersonationWhereInput";
import { ImpersonationOrderByInput } from "./ImpersonationOrderByInput";

export type ImpersonationFindManyArgs = {
  where?: ImpersonationWhereInput;
  orderBy?: Array<ImpersonationOrderByInput>;
  skip?: number;
  take?: number;
};
