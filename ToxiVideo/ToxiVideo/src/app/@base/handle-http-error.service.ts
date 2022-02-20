import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {ModalService} from "../servicios/modal.service";

@Injectable({
  providedIn: 'root'
})
export class HandleHttpErrorService {

  constructor(
    private modalService: ModalService) { }
  public handleError<T>(operation = 'operation', result?: T, mostrarError: boolean = true) {
    return (error: any): Observable<T> => {
      var errorRespuesta =  error.error;
      if(mostrarError){
        this.alertaRespuestaError(errorRespuesta.message);
      }
      return of(result as T);
    };
  }
  public log(message: string) {
    console.log(message);
  }
  alertaRespuestaError(mensaje: string){
    this.modalService.alert(mensaje);
  }
}
