import {Component} from '@angular/core';
import {UsuariosEntity} from "../../../../Entities/Usuarios.entity";
import {RolEntity} from "../../../../Entities/Rol.entity";

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {
  usuariosList: UsuariosEntity[] = [
    {
      idUsuario: 1,
      nombre: "Kelvin Josue",
      apellido: "Vargas Chafle",
      estado: "A",
      email: "joel.vargas.ch@hotmai.com",
      rolList: [{idRol: 1, nombre: "Rol_Admin"}]
    },
  ];

  usuarioRespaldo?:UsuariosEntity;

  deleteUser(id: number): void {
    const usuariosActualizados = this.usuariosList.filter(
      (usuario) => usuario.idUsuario !== id
    );
    this.usuariosList = [...usuariosActualizados];
    alert('Eliminado Correctamente');
  }


  deleteRolUser(id:number):void{


    alert('Eliminado Correctamente');
  }

  respaldarUser(usuario:UsuariosEntity){
    this.usuarioRespaldo = usuario;
  }


}
