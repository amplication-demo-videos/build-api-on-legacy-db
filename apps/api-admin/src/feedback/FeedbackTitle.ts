import { Feedback as TFeedback } from "../api/feedback/Feedback";

export const FEEDBACK_TITLE_FIELD = "comment";

export const FeedbackTitle = (record: TFeedback): string => {
  return record.comment?.toString() || String(record.id);
};
