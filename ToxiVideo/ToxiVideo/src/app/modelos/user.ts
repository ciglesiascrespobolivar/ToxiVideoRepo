import {Persona} from "./persona";
import {Booking} from "./booking";

export class User extends Persona {
  phone: string  = "";
  address: string  = "";
  password: string  = "";
  bookings: Booking[] = [];
  rol: string = "client";
}
