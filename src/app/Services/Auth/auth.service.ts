import {HttpClient, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {UsuariosEntity, AuthUsuario} from "../../Domain/Entities/Entities";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url_api = "http://localhost:8081/api/auth";

  constructor(private http: HttpClient) {
  }

  public registreUsuario(authUsuario: AuthUsuario): Observable<HttpResponse<any>> {
    return this.http.post<UsuariosEntity>(`${this.url_api}/registrar`, authUsuario, {observe: 'response'});
  }

  public generateToken(authUsuario: AuthUsuario): Observable<HttpResponse<any>> {
    return this.http.post(`${this.url_api}/generate-token`, authUsuario, {observe: 'response'});
  }

  //guardamos el token en el storage
  public loginUser(token: any): void {
    localStorage.setItem('token', token)
  }

  public isLoggedIn() {
    let tokenStr = localStorage.getItem('token');
    return (tokenStr);
  }

  public static SIGN_OFF(): boolean {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return true;
  }

  //Obtener token
  public getToken(): String | null {
    return localStorage.getItem('token');
  }

  public setUser(user: any): void {
    localStorage.setItem('user', JSON.stringify(user));
  }

  public getUser() {
    const userStr = localStorage.getItem('user');
    if (userStr) {
      try {
        const user = JSON.parse(userStr);
        return user;
      } catch (error) {
        console.error('Error al analizar el usuario:', error);
      }
    }
    return null;
  }

  public getUserRol() {
    const user = this.getUser();
    if (user && user.authorities && user.authorities.length > 0) {
      return user.authorities[0].authority;
    }
    return null;
  }

  public getCurrentUser(): Observable<HttpResponse<any>> {
    return this.http.get(`${this.url_api}/actual-usuario`, {observe: 'response'});
  }


}
