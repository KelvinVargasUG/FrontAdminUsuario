import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginRegistreComponent} from "./componentes/login-registre/login-registre.component";

const routes: Routes = [
  {path:'', component: LoginRegistreComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
