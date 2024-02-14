import { AppModel } from "../appModel/AppModel";
import { User } from "../user/User";

export type ApiKey = {
  appField?: AppModel | null;
  createdAt: Date;
  expiresAt: Date | null;
  hashedKey: string;
  id: string;
  lastUsedAt: Date | null;
  note: string | null;
  user?: User | null;
};
