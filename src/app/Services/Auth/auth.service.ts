import {HttpClient, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {UsuariosEntity} from "../../Domain/Entities/Usuario/Usuarios.entity";
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url_api = "http://localhost:8081/api/auth";

  constructor(private http: HttpClient) {
  }

  registreUsuario(usuario: UsuariosEntity) {
    return this.http.post<UsuariosEntity>(`${this.url_api}/registrar`, usuario);
  }

  public generateToken(loginData: any) {
    return this.http.post(`${this.url_api}/generate-token`, loginData);
  }

  //guardamos el token en el storage
  public loginUser(token: any): void {
    localStorage.setItem('token', token)
  }

  public isLoggedIn() {
    let tokenStr = localStorage.getItem('token');
    if (tokenStr == undefined || tokenStr == null || tokenStr == '') {
      return false;
    } else {
      return true;
    }
  }

  //Cierre de session y delete token del storage

  public cerrarSession() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return true;
  }

  //Obtener token
  public getToken() {
    return localStorage.getItem('token');
  }

  public setUser(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  public getUser() {
    let userStr = localStorage.getItem('user');
    if (userStr != null) {
      return JSON.parse(userStr);
    } else {
      this.cerrarSession();
      return null;
    }
  }

  public getUserRol() {
    let user: any = this.getUser();
    return user.authorities[0].authority;
  }

  public getCurrentUser() {
    return this.http.get(`${this.url_api}/actual-usuario`);
  }


}
