import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {RolEntity} from "../../Domain/Entities/Usuario/Rol.entity";

@Injectable({
  providedIn: 'root'
})
export class RolService {
  apiBase ="http://localhost:8081/api/roles";

  constructor(private http: HttpClient) {
}

findAllRoles():Observable<RolEntity[]> {
  return this.http.get<RolEntity[]>(`${this.apiBase}`);
}

/*
  constructor(private rolRepository: RolRepositoryImpl) {
    rolRepository.repositorioRol(new RolDatasourceLocal());
  }

  getService(): RolRepositoryImpl {
    return this.rolRepository;
  }

 */
}
