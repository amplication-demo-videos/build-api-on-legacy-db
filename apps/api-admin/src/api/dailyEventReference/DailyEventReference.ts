import { Booking } from "../booking/Booking";

export type DailyEventReference = {
  booking?: Booking | null;
  dailytoken: string;
  dailyurl: string;
  id: number;
};
