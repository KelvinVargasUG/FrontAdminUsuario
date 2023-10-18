import {Injectable} from '@angular/core';
import {UsuarioRepository} from "../../Domain/Repositories/usuario.repository";
import {UsuariosEntity} from "../../Domain/Entities/Usuario/Usuarios.entity";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) {
  }

  usuariosList: UsuariosEntity[] = [

  ];

  apiBase ="http://localhost:8081/api/usuarios";

  createUser(usuario: UsuariosEntity): UsuariosEntity {
    this.usuariosList.push(usuario)
    return usuario;
  }

  deleteUser(id: number): number {
    return 200;
  }

  findAllUser(){
    return this.http.get<UsuariosEntity>(`${this.apiBase}`);
  }

  findByIdUser(id: number): UsuariosEntity | null {
    const usuario = this.usuariosList.find(usuario => usuario.id == id);
    if (usuario == undefined) {
      return null;
    }
    return usuario;
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
