import {Status} from "./status";
import {Movie} from "./movie";

export class RespuestaMovie {
  status: Status = new Status();
  movies: Movie[] = [];
}
