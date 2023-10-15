import { RolEntity } from "./Rol.entity";

export interface UsuariosEntity {
  id: number;
  nombre: string;
  apellido: string;
  estado: string;
  email: string;
  password?: string;
  rolList: RolEntity[];
}
