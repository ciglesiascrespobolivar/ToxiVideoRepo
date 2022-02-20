import { Component, OnInit } from '@angular/core';
import {User} from "../../modelos/user";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../servicios/authentication.service";
import {MovieService} from "../../servicios/movie.service";
import {Movie} from "../../modelos/movie";
import {Booking} from "../../modelos/booking";
import {ModalService} from "../../servicios/modal.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  movies: Movie[] = []
  currentUser: User = new User();
  constructor(private router: Router,
              private authenticationService: AuthenticationService,
              private movieService: MovieService,
              private modalService: ModalService) { }

  ngOnInit(): void {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    this.moviesConsultar();
  }

  moviesConsultar()
  {
    this.movieService.Todos().subscribe(respuesta =>{
      this.movies = respuesta.movies;
    })
  }

  reserar(id: number)
  {
    let bookin: Booking = new Booking();
    bookin.movieId = id;
    bookin.userId = this.currentUser.id;
    this.movieService.RegistrarBooking(bookin).subscribe( r => {
      if(r  != undefined)
      {
        this.modalService.alert("Registrado");
        this.moviesConsultar();
      }
    })
  }
}
