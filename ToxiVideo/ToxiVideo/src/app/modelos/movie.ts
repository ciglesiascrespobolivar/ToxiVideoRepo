import {Booking} from "./booking";
import {Actor} from "./actor";

export class Movie {
  id: number = 0;
  title!: string;
  description!: string;
  director!: string;
  stock: number = 0;
  actors: Actor[] = [];
  bookings: Booking[] = [];
}
