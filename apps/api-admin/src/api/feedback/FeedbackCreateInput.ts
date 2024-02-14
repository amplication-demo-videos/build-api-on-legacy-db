import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FeedbackCreateInput = {
  comment?: string | null;
  date: Date;
  rating: string;
  user: UserWhereUniqueInput;
};
