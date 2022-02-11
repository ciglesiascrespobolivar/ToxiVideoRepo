import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatIconModule} from "@angular/material/icon";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatDialogModule} from "@angular/material/dialog";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatButtonModule} from "@angular/material/button";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {ModalDesicionComponent} from "./componentes/modal-desicion/modal-desicion.component";
import {ModalInfoComponent} from "./componentes/modal-info/modal-info.component";
import { LoginComponent } from './componentes/login/login.component';
import { HomeComponent } from './componentes/home/home.component';
import { NavComponent } from './componentes/nav/nav.component';
import { RegistrarComponent } from './componentes/registrar/registrar.component';
import {MatStepperModule} from "@angular/material/stepper";
import {MatCardModule} from "@angular/material/card";
import { ModalCreateMovieComponent } from './componentes/modal-create-movie/modal-create-movie.component';
import { ModalBookingsComponent } from './componentes/modal-bookings/modal-bookings.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalDesicionComponent,
    ModalInfoComponent,
    LoginComponent,
    HomeComponent,
    NavComponent,
    RegistrarComponent,
    ModalCreateMovieComponent,
    ModalBookingsComponent
  ],
  imports: [
    MatSnackBarModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatDialogModule,
    MatButtonToggleModule,
    FormsModule,
    MatPaginatorModule,
    NgbModule,
    MatButtonModule,
    MatStepperModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
