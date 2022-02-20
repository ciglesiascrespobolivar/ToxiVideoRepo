import {Component, Inject, OnInit} from '@angular/core';
import {User} from "../../modelos/user";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ModalService} from "../../servicios/modal.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {AuthenticationService} from "../../servicios/authentication.service";
import {first} from "rxjs/operators";
import {UserService} from "../../servicios/user.service";
import {environment} from "../../../environments/environment";
import {UserLogin} from "../../modelos/user-login";

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss']
})
export class RegistrarComponent implements OnInit {

  user!: User;
  style!: {}
  baseUrl: string;

  formulario!: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private usuarioService: UserService,
    private modalService: NgbModal,
    private authenticationService: AuthenticationService,
    private modal: ModalService
  ) {
    this.baseUrl = environment.baseUrl; this.generarEstilosFondo();
  }

  generarEstilosFondo()
  {
    this.style = {
      backgroundImage: 'url('+this.baseUrl+'imagenes/imagenesSistema/PicsArt_10-14-12.14.04.jpg)'
    };
  }

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm() {
    this.user = new User();
    this.formulario = this.formBuilder.group({
      name: [this.user.name, Validators.required],
      lastName: [this.user.lastName, Validators.required],
      id: [this.user.id, Validators.required],
      phone: [this.user.phone, Validators.required],
      address: [this.user.address, Validators.required],
      password: [this.user.password, Validators.required],
      rol: "client"
    });
  }

  get control() {
    return this.formulario.controls;
  }

  onSubmit() {
    if (this.formulario.invalid) {
      return;
    }
    this.crearCliente();
  }

  crearCliente(){

    this.user = this.formulario.value;
    this.usuarioService.Registrar(this.user).pipe().subscribe
    (
      respuesta => {
        if(!respuesta.status.ok){
          this.modal.openDialogInfo("BIEN HECHO.","Cliente registrado. Cuenta de cliente creada.");
          this.iniciarSesion();
        }
      }
    );
  }
  iniciarSesion(){
    var usuario = new UserLogin();
    usuario.email = this.user.address;
    usuario.password = this.user.password;
    usuario.rol = "client";
    this.authenticationService.login(usuario).pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['/home']);
        },
        error =>{
          this.alertaRespuestaError(error);
        }
      );
  }
  alertaRespuestaError(error: any){
    this.modal.openDialogInfo("ALERTA.", error.error.mensaje, 2)
  }

}
