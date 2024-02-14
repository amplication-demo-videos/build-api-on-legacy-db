import { Session as TSession } from "../api/session/Session";

export const SESSION_TITLE_FIELD = "sessionToken";

export const SessionTitle = (record: TSession): string => {
  return record.sessionToken?.toString() || String(record.id);
};
