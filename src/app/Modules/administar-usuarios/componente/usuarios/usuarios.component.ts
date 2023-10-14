import {Component} from '@angular/core';
import {UsuariosEntity} from "../../../../Entities/Usuarios.entity";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {EditarUsuarioComponent} from "../editar-usuario/editar-usuario.component";

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {

  static readonly ROUTE = 'usuarios';

  protected formUser!: FormGroup;

   usuariosList: UsuariosEntity[] = [
    {
      idUsuario: 1,
      nombre: "Kelvin Josue",
      apellido: "Vargas Chafle",
      estado: "A",
      email: "joel.vargas.ch@hotmai.com",
      rolList: [
        {idRol: 1, nombre: "Rol_Admin"},
        {idRol: 2, nombre: "Rol_User"}
      ]
    },
    {
      idUsuario: 2,
      nombre: "Andres",
      apellido: "Vargas Chafle",
      estado: "A",
      email: "j",
      rolList: [
        {idRol: 1, nombre: "Rol_Admin"},
        {idRol: 2, nombre: "Rol_User"}
      ]
    }
  ];

  protected usuarioRespaldo?: UsuariosEntity;

  constructor(private formBuilder: FormBuilder) {
    this.buildForm();
  }

  private buildForm(): void {
    this.formUser = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      estado: ['', [Validators.required, Validators.pattern(/^[IA]$/)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      rol: ['', [Validators.required]]
    });
  }

  protected respaldarUser(usuario: UsuariosEntity): void {
    this.usuarioRespaldo = usuario;
  }

  protected saveUser(): void {
    if (this.formUser.valid) {
      const usuario: UsuariosEntity = this.formUser.value;
      this.usuariosList.push(usuario);
      alert('Usuario Guardado Correctamente');
      this.buildForm();
    } else {
      alert('Formulario Invalido');
    }
  }

  protected deleteUser(id: number): void {
    const usuariosActualizados = this.usuariosList.filter(
      (usuario) => usuario.idUsuario !== id
    );
    this.usuariosList = [...usuariosActualizados];
    alert('Eliminado Correctamente');
  }

  protected deleteRolUser(id: number): void {
    const rolActualizados = this.usuarioRespaldo?.rolList?.filter(
      (rol) => rol.idRol !== id
    );
    this.usuarioRespaldo!.rolList = [...rolActualizados!];
    alert('Eliminado Correctamente');
  }

  protected readonly EditarUsuarioComponent = EditarUsuarioComponent;
}
