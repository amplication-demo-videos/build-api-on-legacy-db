import { CredentialWhereInput } from "./CredentialWhereInput";
import { CredentialOrderByInput } from "./CredentialOrderByInput";

export type CredentialFindManyArgs = {
  where?: CredentialWhereInput;
  orderBy?: Array<CredentialOrderByInput>;
  skip?: number;
  take?: number;
};
