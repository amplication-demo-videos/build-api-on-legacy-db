import { Account as TAccount } from "../api/account/Account";

export const ACCOUNT_TITLE_FIELD = "accessToken";

export const AccountTitle = (record: TAccount): string => {
  return record.accessToken?.toString() || String(record.id);
};
