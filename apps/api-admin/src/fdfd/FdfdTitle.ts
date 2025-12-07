import { Fdfd as TFdfd } from "../api/fdfd/Fdfd";

export const FDFD_TITLE_FIELD = "id";

export const FdfdTitle = (record: TFdfd): string => {
  return record.id?.toString() || String(record.id);
};
