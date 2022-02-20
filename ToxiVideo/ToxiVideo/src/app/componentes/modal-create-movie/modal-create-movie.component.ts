import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MovieService} from "../../servicios/movie.service";
import {Movie} from "../../modelos/movie";
import {Actor} from "../../modelos/actor";
import {User} from "../../modelos/user";
import {ModalService} from "../../servicios/modal.service";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-modal-create-movie',
  templateUrl: './modal-create-movie.component.html',
  styleUrls: ['./modal-create-movie.component.scss']
})
export class ModalCreateMovieComponent implements OnInit {

  formularioMovie!: FormGroup;
  formularioActors!: FormGroup;

  actorAdd: boolean = false;

  movie: Movie = new Movie();
  actor: Actor = new Actor();
  constructor(
    private formBuilder: FormBuilder,
    private service: MovieService,
    private modalService: ModalService,
    public dialogRef: MatDialogRef<ModalCreateMovieComponent>
  ) {
    this.buildFormMovie();
    this.buildFormActors();
  }

  ngOnInit(): void {

  }

  private buildFormMovie() {
    this.movie = new Movie();
    this.formularioMovie = this.formBuilder.group({
      title: [this.movie.title, Validators.required],
      description: [this.movie.description, Validators.required],
      id: this.movie.id,
      director: [this.movie.director, Validators.required],
      stock: [this.movie.stock, Validators.required]
    });
  }

  get controlMovie() {
    return this.formularioMovie.controls;
  }

  onSubmitmovie() {
    if (this.formularioMovie.invalid) {
      return;
    }
    let actors = this.movie.actors;
    this.movie = this.formularioMovie.value;
    this.movie.actors = actors;
    this.service.Registrar(this.movie).subscribe(r => {
      if (r != undefined){
        this.modalService.alert("Pelicula registrada");
        this.dialogRef.close();
      }
    });
  }
  private buildFormActors() {
    this.actor = new Actor();
    this.formularioActors = this.formBuilder.group({
      name: [this.actor.name, Validators.required],
      lastName: [this.actor.lastName, Validators.required],
      id: [this.actor.id, Validators.required],
      idMovie: 0
    });
  }

  get controlActor() {
    return this.formularioActors.controls;
  }

  onSubmitActor() {
    if (this.formularioActors.invalid) {
      return;
    }
    this.actor = this.formularioActors.value;
    this.movie.actors.push(this.actor);
    this.buildFormActors();
    this.alert();
  }

  alert()
  {
    this.actorAdd = !this.actorAdd;
    setTimeout(()=>{this.actorAdd = !this.actorAdd;},1000)
  }
}
