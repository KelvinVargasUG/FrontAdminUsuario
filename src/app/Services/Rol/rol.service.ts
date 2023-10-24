import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {RolEntity} from "../../Domain/Entities/Entities";
import {environment} from "../../../environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export class RolService {
  private URL_API: string = environment.apiUrlBase + environment.pathApiUrl.rol;

  constructor(private http: HttpClient) {
  }

  findAllRoles(): Observable<RolEntity[]> {
    return this.http.get<RolEntity[]>(`${this.URL_API}`);
  }

  findRolById(id: number): Observable<RolEntity[]> {
    return this.http.get<RolEntity[]>(`${this.URL_API}/user/${id}`);
  }
}
