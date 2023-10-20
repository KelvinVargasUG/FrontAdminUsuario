import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import { LayoutComponent } from './Presentation/Layout/layout/layout.component';
import { FooterComponent } from './Presentation/Shared/Footer/footer/footer.component';
import { HeaderComponent } from './Presentation/Shared/Header/header/header.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from "@angular/common/http";
import {authInterceptorProviders} from "./Services/Interceptors/auth/auth.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    FooterComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
