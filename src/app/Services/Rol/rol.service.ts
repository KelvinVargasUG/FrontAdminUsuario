import {Injectable} from '@angular/core';
import {RolDatasourceLocal} from "../../Infrastructure/DataSources/Usuario/rol.datasource.local";
import {RolRepository} from "../../Domain/Repositories/rol.repository";
import {RolRepositoryImpl} from "../../Infrastructure/Repositories/Local/Usuario/rol.repository.impl";

@Injectable({
  providedIn: 'root'
})
export class RolService {

  constructor(private rolRepository: RolRepositoryImpl) {
    rolRepository.repositorioRol(new RolDatasourceLocal());
  }

  getService(): RolRepositoryImpl {
    return this.rolRepository;
  }
}
