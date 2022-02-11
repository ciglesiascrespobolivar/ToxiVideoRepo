import {Component, OnInit} from '@angular/core';
import {User} from "./modelos/user";
import {Router} from "@angular/router";
import {AuthenticationService} from "./servicios/authentication.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'ToxiVideo';

}
