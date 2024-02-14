import { User } from "../user/User";

export type SelectedCalendar = {
  externalId: string;
  id: number;
  integration: string;
  user?: User;
};
