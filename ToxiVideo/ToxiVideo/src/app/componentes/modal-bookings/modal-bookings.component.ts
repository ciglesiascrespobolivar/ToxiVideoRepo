import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {UserService} from "../../servicios/user.service";
import {AuthenticationService} from "../../servicios/authentication.service";
import {User} from "../../modelos/user";
import {Booking} from "../../modelos/booking";
import {Movie} from "../../modelos/movie";

@Component({
  selector: 'app-modal-bookings',
  templateUrl: './modal-bookings.component.html',
  styleUrls: ['./modal-bookings.component.scss']
})
export class ModalBookingsComponent implements OnInit {

  currentUser: User = new User();
  Bookings: Movie[] = [];
  constructor(public dialogRef: MatDialogRef<ModalBookingsComponent>,
              private userService: UserService,
              private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    this.ConsultarBooking();
  }

  ConsultarBooking()
  {
    this.userService.bookins(this.currentUser.id).subscribe( r =>{
      if(r.status.ok)
      {
        this.Bookings = r.movies;
      }
    })
  }
}
