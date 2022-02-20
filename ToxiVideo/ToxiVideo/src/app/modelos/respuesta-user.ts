import {Status} from "./status";
import {User} from "./user";

export class RespuestaUser {
  status: Status = new Status();
  users: User[] = [];
}
