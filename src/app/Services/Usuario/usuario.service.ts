import {Injectable} from '@angular/core';
import {UsuariosEntity} from "../../Domain/Entities/Entities";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) {
  }

  private URL_API: string = environment.apiUrlBase + environment.pathApiUrl.usuario;

  createUser(usuario: UsuariosEntity): Observable<HttpResponse<any>> {
    return this.http.post(`${this.URL_API}`, usuario, {observe: 'response'});
  }

  deleteUser(id: number): Observable<HttpResponse<any>> {
    return this.http.delete(`${this.URL_API}/${id}`, {observe: 'response'});
  }

  findAllUser(): Observable<UsuariosEntity[]> {
    return this.http.get<UsuariosEntity[]>(`${this.URL_API}`);
  }

  findByIdUser(id: number): Observable<HttpResponse<any>> {
    return this.http.get(`${this.URL_API}/${id}`, {observe: 'response'});
  }

  updateUser(id: number, usuario: UsuariosEntity): Observable<HttpResponse<any>> {
    return this.http.put(`${this.URL_API}/${id}`, usuario, {observe: 'response'});
  }

  updateRolUser(idUser: number, idRol: number): Observable<HttpResponse<any>> {
    return this.http.put(`${this.URL_API}/${idUser}/update_rol/${idRol}`, null, {observe: 'response'});
  }

}
