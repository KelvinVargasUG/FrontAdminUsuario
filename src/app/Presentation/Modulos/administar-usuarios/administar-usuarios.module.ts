import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministarUsuariosRoutingModule } from './administar-usuarios-routing.module';
import { EditarUsuarioComponent } from './componente/editar-usuario/editar-usuario.component';
import { UsuariosComponent } from './componente/usuarios/usuarios.component';
import { RolListFormatHumanPipe } from './pipes/rol-format-human/rol-list-format-human.pipe';
import { RolFormatHumanPipe } from './pipes/rol-format-human/rol-format-human.pipe';
import {ReactiveFormsModule} from "@angular/forms";
import { RolesComponent } from './componente/roles/roles.component';


@NgModule({
  declarations: [
    EditarUsuarioComponent,
    UsuariosComponent,
    RolListFormatHumanPipe,
    RolFormatHumanPipe,
    RolesComponent,
  ],
    imports: [
        CommonModule,
        AdministarUsuariosRoutingModule,
        ReactiveFormsModule,
    ]
})
export class AdministarUsuariosModule { }
