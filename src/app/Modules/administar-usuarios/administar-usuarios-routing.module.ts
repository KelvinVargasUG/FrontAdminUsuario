import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsuariosComponent} from "./componente/usuarios/usuarios.component";
import {EditarUsuarioComponent} from "./componente/editar-usuario/editar-usuario.component";

const routes: Routes = [
  {path:'', component: UsuariosComponent},
  {path: EditarUsuarioComponent.ROUTE+'/:id', component:EditarUsuarioComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministarUsuariosRoutingModule { }
