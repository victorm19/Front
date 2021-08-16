import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/entities/login';
import { AuthenticationService } from 'src/app/services/authentication.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  submited: boolean;
  loginModel: Login = new Login();

  constructor(private readonly authenticationService: AuthenticationService,
    private readonly formBuilder: FormBuilder,
    private readonly router: Router) {
    this.submited = false;
  }

  ngOnInit(): void {
    this.inicializarFormulario();
  }

  inicializarFormulario() {
    this.form = this.formBuilder.group({
      usuario: ['', Validators.required],
      pass: ['', Validators.required]
    });
  }

  get f() { return this.form.controls; }

  login() {
    debugger
    if (this.form.invalid) {
      this.submited = true;
      return;
    }

    this.fillModel();
    this.loginService();
  }

  fillModel() {
    this.loginModel.Usuario = this.form.controls.usuario.value;
    this.loginModel.Password = this.form.controls.pass.value;
  }

  loginService() {
    this.authenticationService.login(this.loginModel).subscribe(
      (resp: any) => {
        debugger
          sessionStorage.setItem("token", resp.datos[0]);
          this.submited = false;
          this.router.navigateByUrl('/personas');
      }, 
      err => {
        Swal.fire(
          'Error',
          'Usuario o contraseña inválidos',
          'warning'
        )
      }
    )
  }

}
