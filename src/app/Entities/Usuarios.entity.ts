import { RolEntity } from "./Rol.entity";

export interface UsuariosEntity {
  idUsuario: number;
  nombre: string;
  apellido: string;
  estado: string;
  email: string;
  password?: string;
  rolList: RolEntity[];
}
