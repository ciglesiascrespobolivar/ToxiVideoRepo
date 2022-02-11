import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HandleHttpErrorService} from "../@base/handle-http-error.service";
import {environment} from "../../environments/environment";
import {RespuestaMovie} from "../modelos/respuesta-movie";
import {Movie} from "../modelos/movie";
import {Observable} from "rxjs";
import {Respuesta} from "../modelos/respuesta";
import {catchError} from "rxjs/operators";
import {RespuestaUser} from "../modelos/respuesta-user";
import {User} from "../modelos/user";
import {RespuestaBooking} from "../modelos/respuesta-booking";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl: string;
  constructor(
    private http: HttpClient,
    private handleErrorService: HandleHttpErrorService) {
    this.baseUrl = environment.baseUrl;
  }

  Todos()
  {
    return this.http.get<RespuestaUser>(this.baseUrl+'/User');
  }

  Registrar(user: User): Observable<Respuesta>
  {
    return this.http.post<Respuesta>(this.baseUrl+'/User',user).pipe(
      catchError(this.handleErrorService.handleError<Respuesta>('Fallo al registrar el usuario.',undefined))
    );
  }

  bookins(id: string): Observable<RespuestaMovie>
  {
    return this.http.get<RespuestaMovie>(this.baseUrl+'/User/'+id+'/bookings');
  }
}
