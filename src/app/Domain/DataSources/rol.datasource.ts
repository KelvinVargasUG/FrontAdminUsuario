import {RolEntity} from "../Entities/Usuario/Rol.entity";

export interface RolDatasource {
  findAllRol(): RolEntity[];

  findByUserUnassignedRoles(id: number): RolEntity[];
}
