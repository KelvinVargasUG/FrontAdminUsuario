import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {UsuariosComponent} from "../../../Modulos/administar-usuarios/componente/usuarios/usuarios.component";
import {
  EditarUsuarioComponent
} from "../../../Modulos/administar-usuarios/componente/editar-usuario/editar-usuario.component";
import {LoginRegistreComponent} from "../../../Modulos/auth/componentes/login-registre/login-registre.component";
import {AuthService} from "../../../../Services/Services";
import {HomeComponent} from "../../../Modulos/Home/Componentes/home/home.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private router: Router, public authService: AuthService) {
  }

  protected irPage(pagina: string): void {
    this.router.navigate([pagina]);
  }

  public isLogged(): boolean {
    return !!this.authService.isLoggedIn();
  }

  protected readonly UsuariosComponent = UsuariosComponent;
  protected readonly EditarUsuarioComponent = EditarUsuarioComponent;
  protected readonly LoginRegistreComponent = LoginRegistreComponent;
  protected readonly AuthService = AuthService;
  protected readonly HomeComponent = HomeComponent;
}
