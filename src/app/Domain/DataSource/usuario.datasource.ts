import {UsuariosEntity} from "../Entities/Usuarios.entity";

abstract class UsuarioRepository {
  abstract createUser(usuario: UsuariosEntity): Promise<UsuariosEntity>;
  abstract findAllUser(): Promise<UsuariosEntity[]>;
  abstract findByIdUser(id: number): Promise<UsuariosEntity>;
  abstract updateUser(id: number, usuario: UsuariosEntity): Promise<UsuariosEntity>;
  abstract deleteUser(id: number): Promise<boolean>;
}
