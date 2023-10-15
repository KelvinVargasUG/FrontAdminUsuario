import {Injectable} from '@angular/core';
import {UsuarioDatasourceLocal} from "../../Infrastructure/DataSources/Usuario/usuario.datasource.local";
import {UsuarioRepositoryImpl} from "../../Infrastructure/Repositories/Local/Usuario/usuario.repository.Impl";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private usuarioRepository: UsuarioRepositoryImpl) {
    usuarioRepository.repositorioUsuario(new UsuarioDatasourceLocal());
  }

  getService(): UsuarioRepositoryImpl {
    return this.usuarioRepository;
  }


}
