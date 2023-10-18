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

  usuariosList: UsuariosEntity[] = [];

  apiBase = "http://localhost:8081/api/usuarios";

  createUser(usuario: UsuariosEntity): UsuariosEntity {
    this.usuariosList.push(usuario)
    return usuario;
  }

  deleteUser(id: number): Observable<HttpResponse<any>>{
    return this.http.delete(`${this.apiBase}/${id}`, {observe: 'response'});
  }

  findAllUser(): Observable<UsuariosEntity[]> {
    return this.http.get<UsuariosEntity[]>(`${this.apiBase}`);
  }

  findByIdUser(id: number): Observable<HttpResponse<any>> {
    return this.http.get(`${this.apiBase}/${id}`, {observe: 'response'});
  }

  updateUser(id: number, usuario: UsuariosEntity): UsuariosEntity {
    return usuario;
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
