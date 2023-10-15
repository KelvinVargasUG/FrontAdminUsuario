import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {UsuariosComponent} from "../../../Modulos/administar-usuarios/componente/usuarios/usuarios.component";
import {
  EditarUsuarioComponent
} from "../../../Modulos/administar-usuarios/componente/editar-usuario/editar-usuario.component";

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
}
