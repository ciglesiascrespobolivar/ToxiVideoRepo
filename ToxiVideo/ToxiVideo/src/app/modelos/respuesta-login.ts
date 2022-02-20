import {Status} from "./status";
import {Movie} from "./movie";
import {User} from "./user";

export class RespuestaLogin {
  status: Status = new Status();
  mesage: string = "";
  user: User = new User();
}
