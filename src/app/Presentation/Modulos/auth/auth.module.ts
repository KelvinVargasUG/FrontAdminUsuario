import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import {ReactiveFormsModule} from "@angular/forms";
import { LoginRegistreComponent } from './componentes/login-registre/login-registre.component';

@NgModule({
  declarations: [
    LoginRegistreComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
  ]
})
export class AuthModule { }
