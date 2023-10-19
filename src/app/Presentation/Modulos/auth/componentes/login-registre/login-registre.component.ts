import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthUsuario} from "../../../../../Domain/Entities/Entities";
import {Router} from "@angular/router";
import {UsuariosComponent} from "../../../administar-usuarios/componente/usuarios/usuarios.component";

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

    constructor(private formBuilder: FormBuilder, private router: Router) {
    }

    ngOnInit(): void {
        this.buildFormLogin();
        this.buildFormRegistre();
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
            password: ['', [Validators.required, Validators.minLength(8)]],
        });
    }

    protected logIn(): void {
        if (this.formLogin.valid) {
            this.usuarioAuth = this.formLogin.value;
            this.router.navigate([UsuariosComponent.ROUTE]);
            console.log(this.usuarioAuth);

        } else {
            alert('Formulario Invalido');

        }
    }

    protected registre(): void {
        if (this.formRegistre.valid) {
            this.usuarioAuth = this.formRegistre.value;
            console.log(this.usuarioAuth);
        } else {
            alert('Formulario Invalido');
        }
    }
}

