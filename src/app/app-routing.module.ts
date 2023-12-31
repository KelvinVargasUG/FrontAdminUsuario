import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {UsuariosComponent} from "./Presentation/Modulos/administar-usuarios/componente/usuarios/usuarios.component";
import {LayoutComponent} from "./Presentation/Layout/layout/layout.component";
import {LoginRegistreComponent} from "./Presentation/Modulos/auth/componentes/login-registre/login-registre.component";
import {AuthRolGuard} from "./Guard/auth-rol.guard";
import {UserRolEnum} from "./Domain/Enums/user-rol";
import {HomeComponent} from "./Presentation/Modulos/Home/Componentes/home/home.component";

const routes: Routes = [
  {
    path: LoginRegistreComponent.ROUTE,
    loadChildren: () => import('./Presentation/Modulos/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '', component: LayoutComponent, children: [
      {path: '', redirectTo: HomeComponent.ROUTE, pathMatch: 'full'},

      {
        path: HomeComponent.ROUTE,
        loadChildren: () => import('./Presentation/Modulos/Home/home.module').then(m => m.HomeModule)
      },
      {
        path: UsuariosComponent.ROUTE,
        loadChildren: () => import('./Presentation/Modulos/administar-usuarios/administar-usuarios.module').then(m => m.AdministarUsuariosModule),
        canActivate: [AuthRolGuard], data: {requiredRole: UserRolEnum.ROL_ADMIN}
      },
      {path: '**', loadChildren: () => import('./Presentation/Modulos/Errors/errors.module').then(m => m.ErrorsModule)},

    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
