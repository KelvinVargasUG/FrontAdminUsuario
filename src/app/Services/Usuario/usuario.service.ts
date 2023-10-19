import {Injectable} from '@angular/core';
import {UsuarioRepository} from "../../Domain/Repositories/usuario.repository";
import {UsuariosEntity} from "../../Domain/Entities/Usuario/Usuarios.entity";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) {
  }

  apiBase = "http://localhost:8081/api/usuarios";

  createUser(usuario: UsuariosEntity): Observable<HttpResponse<any>> {
    return this.http.post(`${this.apiBase}`, usuario, {observe: 'response'});
  }

  deleteUser(id: number): Observable<HttpResponse<any>> {
    return this.http.delete(`${this.apiBase}/${id}`, {observe: 'response'});
  }

  findAllUser(): Observable<UsuariosEntity[]> {
    return this.http.get<UsuariosEntity[]>(`${this.apiBase}`);
  }

  findByIdUser(id: number): Observable<HttpResponse<any>> {
    return this.http.get(`${this.apiBase}/${id}`, {observe: 'response'});
  }

  updateUser(id: number, usuario: UsuariosEntity): Observable<HttpResponse<any>> {
    return this.http.put(`${this.apiBase}/${id}`, usuario, {observe: 'response'});
  }
}


/*{

  constructor(private usuarioRepository: UsuarioRepositoryImpl) {
    usuarioRepository.repositorioUsuario(new UsuarioDatasourceLocal());
  }

  getService(): UsuarioRepositoryImpl {
    return this.usuarioRepository;
  }


}
*/
