import {Injectable} from '@angular/core';
import {UsuarioDatasource} from "../../../../Domain/DataSources/usuario.datasource";
import {UsuariosEntity} from "../../../../Domain/Entities/Usuario/Usuarios.entity";
import {UsuarioRepository} from "../../../../Domain/Repositories/usuario.repository";

@Injectable({
  providedIn: 'root'
})
export class UsuarioRepositoryImpl implements UsuarioDatasource {

  private usuarioRepository!: UsuarioRepository;

  constructor() {
  }

  repositorioUsuario(usuarioRepository: UsuarioRepository){
    this.usuarioRepository = usuarioRepository;
  }

  createUser(usuario: UsuariosEntity): UsuariosEntity {
    return this.usuarioRepository.createUser(usuario);
  }

  deleteUser(id: number): number {
    return this.usuarioRepository.deleteUser(id);
  }

  findAllUser(): UsuariosEntity[] {
    return this.usuarioRepository.findAllUser();
  }

  findByIdUser(id: number): UsuariosEntity | null {
    return this.usuarioRepository.findByIdUser(id);
  }

  updateUser(id: number, usuario: UsuariosEntity): UsuariosEntity {
    return this.usuarioRepository.updateUser(id, usuario);
  }
}
