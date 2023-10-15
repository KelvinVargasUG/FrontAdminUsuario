import {RolDatasource} from "../../../Domain/DataSources/rol.datasource";
import {RolEntity} from "../../../Domain/Entities/Usuario/Rol.entity";

export class RolDatasourceLocal implements RolDatasource {

  rolList: RolEntity[] = [
    {
      id: 1,
      nombre: "Rol_Administrador"
    },
    {
      id: 2,
      nombre: "Rol_Usuario"
    }
  ];

  findAllRol(): RolEntity[] {
    return this.rolList;
  }

  findByUserUnassignedRoles(id: number): RolEntity[] {
    return this.rolList;
  }





}
