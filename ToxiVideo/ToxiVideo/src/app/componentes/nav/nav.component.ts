import { Component, OnInit } from '@angular/core';
import {User} from "../../modelos/user";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../servicios/authentication.service";
import {ModalService} from "../../servicios/modal.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  currentUser: User = new User();

  constructor(private router: Router,
              private authenticationService: AuthenticationService,
              private modalService: ModalService
  ) {
  }

  ngOnInit(): void {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  crearMovie() {
    this.modalService.openCreateMovie();
  }

  reservas()
  {
    this.modalService.openBookings();
  }
}
