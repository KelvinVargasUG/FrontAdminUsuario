import {UsuarioRepository} from "../../../Domain/Repositories/usuario.repository";
import {UsuariosEntity} from "../../../Domain/Entities/Usuario/Usuarios.entity";

export class UsuarioDatasourceLocal implements UsuarioRepository {

  usuariosList: UsuariosEntity[] = [
    {
      apellido: "Vargas",
      email: "joel.vargas.ch@hotmail.com",
      estado: "a",
      id: 1,
      nombre: "Kelvin",
      rolList: [
        {
          id: 1,
          nombre: "Rol_Administrador"
        }
      ]
    }
  ];

  createUser(usuario: UsuariosEntity): UsuariosEntity {
    this.usuariosList.push(usuario)
    return usuario;
  }

  deleteUser(id: number): number {
    return 200;
  }

  findAllUser(): UsuariosEntity[] {
    return this.usuariosList;
  }

  findByIdUser(id: number): UsuariosEntity | null {
    const usuario = this.usuariosList.find(usuario => usuario.id == id);
    if (usuario == undefined) {
      return null;
    }
    return usuario;
  }

  updateUser(id: number, usuario: UsuariosEntity): UsuariosEntity {
    return usuario;
  }
}
