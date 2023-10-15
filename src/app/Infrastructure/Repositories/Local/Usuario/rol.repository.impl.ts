import {Injectable} from '@angular/core';
import {RolDatasource} from "../../../../Domain/DataSources/rol.datasource";
import {RolEntity} from "../../../../Domain/Entities/Usuario/Rol.entity";
import {UsuarioRepository} from "../../../../Domain/Repositories/usuario.repository";
import {RolRepository} from "../../../../Domain/Repositories/rol.repository";

@Injectable({
  providedIn: 'root'
})
export class RolRepositoryImpl implements RolDatasource {

  private rolRepository!: RolRepository;

  constructor() {
  }

  repositorioRol(rolRepository: RolRepository){
    this.rolRepository = rolRepository;
  }

  findAllRol(): RolEntity[] {
    return this.rolRepository.findAllRol();
  }

  findByUserUnassignedRoles(id: number): RolEntity[] {
    return this.rolRepository.findByUserUnassignedRoles(id);
  }
}
