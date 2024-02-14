import { ApiKeyWhereInput } from "./ApiKeyWhereInput";
import { ApiKeyOrderByInput } from "./ApiKeyOrderByInput";

export type ApiKeyFindManyArgs = {
  where?: ApiKeyWhereInput;
  orderBy?: Array<ApiKeyOrderByInput>;
  skip?: number;
  take?: number;
};
