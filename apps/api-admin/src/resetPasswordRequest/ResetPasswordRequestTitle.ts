import { ResetPasswordRequest as TResetPasswordRequest } from "../api/resetPasswordRequest/ResetPasswordRequest";

export const RESETPASSWORDREQUEST_TITLE_FIELD = "email";

export const ResetPasswordRequestTitle = (
  record: TResetPasswordRequest
): string => {
  return record.email?.toString() || String(record.id);
};
