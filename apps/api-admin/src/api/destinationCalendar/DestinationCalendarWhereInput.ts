import { BookingWhereUniqueInput } from "../booking/BookingWhereUniqueInput";
import { CredentialWhereUniqueInput } from "../credential/CredentialWhereUniqueInput";
import { EventTypeWhereUniqueInput } from "../eventType/EventTypeWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DestinationCalendarWhereInput = {
  booking?: BookingWhereUniqueInput;
  credential?: CredentialWhereUniqueInput;
  eventType?: EventTypeWhereUniqueInput;
  externalId?: StringFilter;
  id?: IntFilter;
  integration?: StringFilter;
  user?: UserWhereUniqueInput;
};
