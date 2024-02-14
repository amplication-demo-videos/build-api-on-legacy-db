import { FeedbackWhereInput } from "./FeedbackWhereInput";
import { FeedbackOrderByInput } from "./FeedbackOrderByInput";

export type FeedbackFindManyArgs = {
  where?: FeedbackWhereInput;
  orderBy?: Array<FeedbackOrderByInput>;
  skip?: number;
  take?: number;
};
