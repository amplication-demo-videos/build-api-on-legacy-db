import { BookingWhereUniqueInput } from "../booking/BookingWhereUniqueInput";

export type BookingReferenceUpdateInput = {
  booking?: BookingWhereUniqueInput | null;
  deleted?: boolean | null;
  externalCalendarId?: string | null;
  meetingId?: string | null;
  meetingPassword?: string | null;
  meetingUrl?: string | null;
  typeField?: string;
  uid?: string;
};
