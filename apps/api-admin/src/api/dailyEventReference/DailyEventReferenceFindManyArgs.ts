import { DailyEventReferenceWhereInput } from "./DailyEventReferenceWhereInput";
import { DailyEventReferenceOrderByInput } from "./DailyEventReferenceOrderByInput";

export type DailyEventReferenceFindManyArgs = {
  where?: DailyEventReferenceWhereInput;
  orderBy?: Array<DailyEventReferenceOrderByInput>;
  skip?: number;
  take?: number;
};
