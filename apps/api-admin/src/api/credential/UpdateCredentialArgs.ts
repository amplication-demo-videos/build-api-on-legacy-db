import { CredentialWhereUniqueInput } from "./CredentialWhereUniqueInput";
import { CredentialUpdateInput } from "./CredentialUpdateInput";

export type UpdateCredentialArgs = {
  where: CredentialWhereUniqueInput;
  data: CredentialUpdateInput;
};
