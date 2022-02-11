import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./componentes/home/home.component";
import {LoginComponent} from "./componentes/login/login.component";
import {RegistrarComponent} from "./componentes/registrar/registrar.component";

const routes: Routes = [
  {
    path: "home", component: HomeComponent
  },
  {
    path: "Login", component: LoginComponent
  },
  {
    path: "Registro", component: RegistrarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
