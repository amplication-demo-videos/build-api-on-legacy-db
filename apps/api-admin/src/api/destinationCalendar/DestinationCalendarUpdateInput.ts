import { BookingWhereUniqueInput } from "../booking/BookingWhereUniqueInput";
import { CredentialWhereUniqueInput } from "../credential/CredentialWhereUniqueInput";
import { EventTypeWhereUniqueInput } from "../eventType/EventTypeWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DestinationCalendarUpdateInput = {
  booking?: BookingWhereUniqueInput | null;
  credential?: CredentialWhereUniqueInput | null;
  eventType?: EventTypeWhereUniqueInput | null;
  externalId?: string;
  integration?: string;
  user?: UserWhereUniqueInput | null;
};
