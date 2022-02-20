import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HandleHttpErrorService} from "../@base/handle-http-error.service";
import {environment} from "../../environments/environment";
import {RespuestaMovie} from "../modelos/respuesta-movie";
import {Respuesta} from "../modelos/respuesta";
import {Observable} from "rxjs";
import {Movie} from "../modelos/movie";
import {catchError} from "rxjs/operators";
import {Booking} from "../modelos/booking";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  baseUrl: string;
  constructor(
    private http: HttpClient,
    private handleErrorService: HandleHttpErrorService) {
    this.baseUrl = environment.baseUrl;
  }

  Todos()
  {
    return this.http.get<RespuestaMovie>(this.baseUrl+'/api/v1/catalog/movies');
  }

  Registrar(movie: Movie): Observable<Respuesta>
  {
    return this.http.post<Respuesta>(this.baseUrl+'/Movie',movie).pipe(
      catchError(this.handleErrorService.handleError<Respuesta>('Fallo al registrar el video.',undefined))
    );
  }

  RegistrarBooking(booking: Booking): Observable<Respuesta>
  {
    return this.http.post<Respuesta>(this.baseUrl+'/Movie/booking',booking).pipe(
      catchError(this.handleErrorService.handleError<Respuesta>('Fallo al registrar la reserva.',undefined))
    );
  }
}
