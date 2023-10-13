import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministarUsuariosRoutingModule } from './administar-usuarios-routing.module';
import { EditarUsuarioComponent } from './componente/editar-usuario/editar-usuario.component';
import { UsuariosComponent } from './componente/usuarios/usuarios.component';
import { RolFormatHumanPipe } from './pipes/rol-format-human/rol-format-human.pipe';


@NgModule({
  declarations: [
    EditarUsuarioComponent,
    UsuariosComponent,
    RolFormatHumanPipe,
  ],
  imports: [
    CommonModule,
    AdministarUsuariosRoutingModule,
  ]
})
export class AdministarUsuariosModule { }
