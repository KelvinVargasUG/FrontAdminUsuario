import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {RolEntity} from "../../Domain/Entities/Entities";

@Injectable({
  providedIn: 'root'
})
export class RolService {
  apiBase = "http://localhost:8081/api/roles";

  constructor(private http: HttpClient) {
  }

  findAllRoles(): Observable<RolEntity[]> {
    return this.http.get<RolEntity[]>(`${this.apiBase}`);
  }

  /*
  updateUserRol(id_usuario: number, id_rol: number): Observable<HttpResponse<any>> {
    return this.http.put<any>(`${this.apiBase}/${id_usuario}/roles/${id_rol}`, null);
  }
*/
}
