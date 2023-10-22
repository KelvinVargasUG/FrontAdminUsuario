import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {UsuariosComponent} from "../../../Modulos/administar-usuarios/componente/usuarios/usuarios.component";
import {
  EditarUsuarioComponent
} from "../../../Modulos/administar-usuarios/componente/editar-usuario/editar-usuario.component";
import {LoginRegistreComponent} from "../../../Modulos/auth/componentes/login-registre/login-registre.component";
import {AuthService} from "../../../../Services/Auth/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private router: Router) {
  }


  protected irPage(pagina: string): void {
    this.router.navigate([pagina]);
  }

  protected readonly UsuariosComponent = UsuariosComponent;
  protected readonly EditarUsuarioComponent = EditarUsuarioComponent;
  protected readonly LoginRegistreComponent = LoginRegistreComponent;
  protected readonly AuthService = AuthService;
}
