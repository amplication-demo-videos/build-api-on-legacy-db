import { User } from "../user/User";

export type Feedback = {
  comment: string | null;
  date: Date;
  id: number;
  rating: string;
  user?: User;
};
