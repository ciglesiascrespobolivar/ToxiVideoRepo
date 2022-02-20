import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import { HandleHttpErrorService } from '../@base/handle-http-error.service';
import {User} from "../modelos/user";
import {UserLogin} from "../modelos/user-login";
import {RespuestaLogin} from "../modelos/respuesta-login";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private currentUserSubject!: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  baseUrl: string;
  constructor(
    private handleErrorService: HandleHttpErrorService,
    private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(<string>localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
    this.baseUrl = environment.baseUrl;
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(user: UserLogin): Observable<RespuestaLogin> {
    console.log("usuario",user);
    return this.http.post<RespuestaLogin>(`${this.baseUrl}/api/v1/user/login`, user)
      .pipe(
        tap(respuesta => {
          console.log(respuesta);
          if(respuesta.status.ok){
            localStorage.setItem('currentUser', JSON.stringify(respuesta.user));
            this.currentUserSubject.next(respuesta.user);
          }
        }),
        catchError(this.handleErrorService.handleError<RespuestaLogin>('Fallo al iniciar sesión.', undefined))
        );
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null as any);
  }
}
