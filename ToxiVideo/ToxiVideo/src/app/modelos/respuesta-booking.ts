import {Status} from "./status";
import {Movie} from "./movie";
import {Booking} from "./booking";

export class RespuestaBooking {
  status: Status = new Status();
  bookings: Booking[] = [];
}
