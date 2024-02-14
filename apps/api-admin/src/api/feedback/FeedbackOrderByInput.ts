import { SortOrder } from "../../util/SortOrder";

export type FeedbackOrderByInput = {
  comment?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  rating?: SortOrder;
  userId?: SortOrder;
};
