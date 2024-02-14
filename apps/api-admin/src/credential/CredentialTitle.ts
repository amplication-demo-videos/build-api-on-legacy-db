import { Credential as TCredential } from "../api/credential/Credential";

export const CREDENTIAL_TITLE_FIELD = "typeField";

export const CredentialTitle = (record: TCredential): string => {
  return record.typeField?.toString() || String(record.id);
};
