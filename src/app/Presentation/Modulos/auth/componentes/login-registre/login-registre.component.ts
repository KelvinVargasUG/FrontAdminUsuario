import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthUsuario} from "../../../../../Domain/Entities/Entities";
import {Router} from "@angular/router";
import {UsuariosComponent} from "../../../administar-usuarios/componente/usuarios/usuarios.component";
import {AuthService} from "../../../../../Services/Auth/auth.service";
import {catchError, of, switchMap} from "rxjs";

@Component({
  selector: 'app-login-registre',
  templateUrl: './login-registre.component.html',
  styleUrls: ['./login-registre.component.css']
})
export class LoginRegistreComponent implements OnInit {
  static readonly ROUTE = 'login';

  protected formRegistre!: FormGroup;
  protected formLogin!: FormGroup;
  protected isLogin: boolean = true;
  private usuarioAuth!: AuthUsuario;

  constructor(private formBuilder: FormBuilder, private router: Router, private auhtService: AuthService) {
  }

  ngOnInit(): void {
    this.buildFormLogin();
    this.buildFormRegistre();
    this.checkLoggedInStatus();
  }
  private checkLoggedInStatus() {
    if (this.auhtService.isLoggedIn()) {
      this.router.navigate([UsuariosComponent.ROUTE]);
    }
  }

  private buildFormRegistre(): void {
    this.formRegistre = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  private buildFormLogin() {
    this.formLogin = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    });
  }


  protected SignIn(): void {
    if (!this.formLogin.valid) {
      alert('Formulario Invalido');
      return;
    }

    this.usuarioAuth = this.formLogin.value;

    this.auhtService.generateToken(this.usuarioAuth)
      .pipe(
        switchMap((data: any) => {
          if (data.status !== 200) {
            alert(data.error);
            return of(null);
          }

          this.auhtService.loginUser(data.body.token);
          return this.auhtService.getCurrentUser();
        }),
        catchError((error) => {
          alert(error.error);
          return of(null);
        })
      )
      .subscribe((user: any) => {
        if (user && user.status === 200) {
          this.auhtService.setUser(user.body);
          this.router.navigate([UsuariosComponent.ROUTE]);
        }
      });
  }


  protected registre(): void {
    if (this.formRegistre.valid) {
      this.usuarioAuth = this.formRegistre.value;
      this.auhtService.registreUsuario(this.usuarioAuth).subscribe({
        next: (data: any) => {
          if (data.status == 200) {
            alert('Usuario Registrado');
            this.router.navigate([UsuariosComponent.ROUTE]);
          }
        },
        error: (error) => {
          alert(error.error);
        }
      });
      console.log(this.usuarioAuth);
    } else {
      alert('Formulario Invalido');
    }
  }


}

