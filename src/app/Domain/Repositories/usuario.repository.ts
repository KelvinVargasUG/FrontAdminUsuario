import {UsuariosEntity} from "../Entities/Usuario/Usuarios.entity";

export interface UsuarioRepository {

  createUser(usuario: UsuariosEntity): UsuariosEntity;

  findAllUser(): UsuariosEntity[];

  findByIdUser(id: number): UsuariosEntity | null;

  updateUser(id: number, usuario: UsuariosEntity): UsuariosEntity;

  deleteUser(id: number): number;
}
