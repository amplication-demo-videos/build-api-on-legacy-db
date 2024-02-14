import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FeedbackUpdateInput = {
  comment?: string | null;
  date?: Date;
  rating?: string;
  user?: UserWhereUniqueInput;
};
