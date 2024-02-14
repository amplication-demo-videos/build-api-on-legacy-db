import { VerificationToken as TVerificationToken } from "../api/verificationToken/VerificationToken";

export const VERIFICATIONTOKEN_TITLE_FIELD = "identifier";

export const VerificationTokenTitle = (record: TVerificationToken): string => {
  return record.identifier?.toString() || String(record.id);
};
