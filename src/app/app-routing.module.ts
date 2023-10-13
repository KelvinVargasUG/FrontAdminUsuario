import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {path: '', redirectTo: 'usuario', pathMatch: 'full'},
  {
    path: 'usuario',
    loadChildren: () => import('./Modules/administar-usuarios/administar-usuarios.module').then(m => m.AdministarUsuariosModule)
  },
  {path: '**', loadChildren: () => import('./Errors/errors.module').then(m => m.ErrorsModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
