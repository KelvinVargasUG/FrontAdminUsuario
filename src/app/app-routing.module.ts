import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {UsuariosComponent} from "./Modules/administar-usuarios/componente/usuarios/usuarios.component";

const routes: Routes = [
  {path: '', redirectTo: UsuariosComponent.ROUTE, pathMatch: 'full'},
  {
    path: UsuariosComponent.ROUTE,
    loadChildren: () => import('./Modules/administar-usuarios/administar-usuarios.module').then(m => m.AdministarUsuariosModule)
  },
  {path: '**', loadChildren: () => import('./Modules/Errors/errors.module').then(m => m.ErrorsModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
