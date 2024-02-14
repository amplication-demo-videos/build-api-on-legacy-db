import { Availability as TAvailability } from "../api/availability/Availability";

export const AVAILABILITY_TITLE_FIELD = "id";

export const AvailabilityTitle = (record: TAvailability): string => {
  return record.id?.toString() || String(record.id);
};
