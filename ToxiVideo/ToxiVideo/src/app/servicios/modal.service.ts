import { Injectable } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {ModalDesicionComponent} from "../componentes/modal-desicion/modal-desicion.component";
import {ModalInfoComponent} from "../componentes/modal-info/modal-info.component";
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from "@angular/material/snack-bar";
import {ModalCreateMovieComponent} from "../componentes/modal-create-movie/modal-create-movie.component";
import {ModalBookingsComponent} from "../componentes/modal-bookings/modal-bookings.component";


@Injectable({
  providedIn: 'root'
})
export class ModalService {


  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  constructor(public dialog: MatDialog,
              private _snackBar: MatSnackBar
              ) { }

  openDialogDesicion(titulo: string, cuerpo: string): Observable<Boolean>
  {
    let referenciaModal = this.dialog.open(ModalDesicionComponent, {
      data: {titulo: titulo, cuerpo: cuerpo}
    });
    return referenciaModal.afterClosed().pipe(
      map(
        result =>{
          return (result == true)
        }
      )
    );
  }

  openDialogInfo(titulo: string, cuerpo: string, tipo = 1)
  {
    this.dialog.open(ModalInfoComponent, {
      data: {titulo: titulo, cuerpo: cuerpo, tipo: tipo}
    });
  }


  alert(message: string)
  {
    this._snackBar.open(message, 'Ok', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 3000,
    });
  }

  openCreateMovie()
  {
    this.dialog.open(ModalCreateMovieComponent);
  }

  openBookings()
  {
    this.dialog.open(ModalBookingsComponent);
  }

}
