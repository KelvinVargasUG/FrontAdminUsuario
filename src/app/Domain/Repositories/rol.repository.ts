import {RolEntity} from "../Entities/Usuario/Rol.entity";

export interface RolRepository {
  findAllRol(): RolEntity[];

  findByUserUnassignedRoles(id: number): RolEntity[];

}
