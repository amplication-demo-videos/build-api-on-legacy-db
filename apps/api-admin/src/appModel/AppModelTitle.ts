import { AppModel as TAppModel } from "../api/appModel/AppModel";

export const APPMODEL_TITLE_FIELD = "dirName";

export const AppModelTitle = (record: TAppModel): string => {
  return record.dirName?.toString() || String(record.id);
};
