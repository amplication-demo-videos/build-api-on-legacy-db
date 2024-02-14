import { Impersonation as TImpersonation } from "../api/impersonation/Impersonation";

export const IMPERSONATION_TITLE_FIELD = "id";

export const ImpersonationTitle = (record: TImpersonation): string => {
  return record.id?.toString() || String(record.id);
};
