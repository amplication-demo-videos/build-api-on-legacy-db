import { AppModelWhereInput } from "./AppModelWhereInput";
import { AppModelOrderByInput } from "./AppModelOrderByInput";

export type AppModelFindManyArgs = {
  where?: AppModelWhereInput;
  orderBy?: Array<AppModelOrderByInput>;
  skip?: number;
  take?: number;
};
