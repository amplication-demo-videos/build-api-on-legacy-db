import { DailyEventReference as TDailyEventReference } from "../api/dailyEventReference/DailyEventReference";

export const DAILYEVENTREFERENCE_TITLE_FIELD = "dailytoken";

export const DailyEventReferenceTitle = (
  record: TDailyEventReference
): string => {
  return record.dailytoken?.toString() || String(record.id);
};
