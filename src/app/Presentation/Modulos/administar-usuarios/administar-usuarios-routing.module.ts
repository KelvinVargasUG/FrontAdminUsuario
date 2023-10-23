import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsuariosComponent} from "./componente/usuarios/usuarios.component";
import {EditarUsuarioComponent} from "./componente/editar-usuario/editar-usuario.component";
import {RolesComponent} from "./componente/roles/roles.component";

const routes: Routes = [
  {path:'', component: UsuariosComponent},
  {path: EditarUsuarioComponent.ROUTE+'/:id', component:EditarUsuarioComponent},
  {path: RolesComponent.ROUTE, component:RolesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministarUsuariosRoutingModule { }
