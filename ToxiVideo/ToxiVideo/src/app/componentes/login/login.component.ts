import { Component, OnInit } from '@angular/core';
import {UserService} from "../../servicios/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticationService} from "../../servicios/authentication.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {User} from "../../modelos/user";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  style!: {}
  baseUrl: string;

  usuario: User = new User();

  formulario!: FormGroup
  constructor(private router: Router,
              private service: UserService,
              private modalService: NgbModal,
              private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private authenticationService: AuthenticationService) {
    this.baseUrl = environment.baseUrl;
    this.generarEstilosFondo();
  }

  ngOnInit(): void {
    this.authenticationService.logout();
    this.buildForm();
  }

  generarEstilosFondo()
  {
    this.style = {

    };
  }

  private buildForm() {
    this.usuario = new User();
    this.usuario.password = '';
    this.usuario.address = '';
    this.formulario = this.formBuilder.group({
      password: [this.usuario.password, Validators.required],
      address: [this.usuario.address, Validators.required],
      rol: [this.usuario.rol, Validators.required]
    });
  }

  get control() {
    return this.formulario.controls;
  }

  onSubmit() {
    if (this.formulario.invalid) {
      return;
    }
    this.iniciarSession();
  }
  iniciarSession() {
    this.usuario = this.formulario.value;
    this.authenticationService.login(this.usuario)
      .subscribe(
        data => {
          if(data != undefined){
            this.router.navigate(['/home']);
          }
        });
  }
}
