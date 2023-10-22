import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

import {UsuariosEntity, RolEntity} from '../../../../../Domain/Entities/Entities';
import {UsuarioService, RolService} from '../../../../../Services/Services';
import {EditarUsuarioComponent} from "../editar-usuario/editar-usuario.component";

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  static readonly ROUTE = 'usuarios';

  protected formUser!: FormGroup;

  usuariosList!: UsuariosEntity[];

  protected roles!: RolEntity[];

  protected usuarioRespaldo?: UsuariosEntity;

  ngOnInit(): void {
    this.findAllUser();
  }

  constructor(private formBuilder: FormBuilder, private usuarioService: UsuarioService, private rolService: RolService) {
    this.buildForm();
    this.getRoles();
  }

  private buildForm(): void {
    this.formUser = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      //estado: ['', [Validators.required, Validators.pattern(/^[IA]$/)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]/*,
      rol: this.formBuilder.array([
        this.formBuilder.group({
          id: ['', [Validators.required]]
        })
      ])*/
    });
  }

  private findAllUser(): void {
    this.usuarioService.findAllUser().subscribe({
      next: (data: UsuariosEntity[]) => {
        this.usuariosList = data;
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

  protected respaldarUser(usuario: UsuariosEntity): void {
    this.usuarioRespaldo = usuario;
  }

  protected saveUser(): void {
    if (this.formUser.valid) {
      const usuario: UsuariosEntity = this.formUser.value;
      this.usuarioService.createUser(usuario).subscribe({
        next: (data: any) => {
          if (data.status == 200) {
            this.usuariosList.unshift(data.body.body);
            alert('Usuario Guardado Correctamente');
          }
        },error: (error: any) => {
          alert(error.error);
        }
      });
      this.buildForm();
    } else {
      alert('Formulario Invalido');
    }
  }

  protected deleteUser(id: number): void {
    this.usuarioService.deleteUser(id).subscribe({
      next: (data: any) => {
        if (data.status == 200) {
          const usuariosActualizados = this.usuariosList.filter(
            (usuario: UsuariosEntity) => usuario.id !== id
          );
          this.usuariosList = [...usuariosActualizados];
          alert('Eliminado Correctamente');
        }
      },
      error: (error: any) => {
        alert(error.error);
      }
    });
  }

  protected deleteRolUser(id: number): void {
    const rolActualizados = this.usuarioRespaldo?.rolList?.filter(
      (rol) => rol.id !== id
    );
    this.usuarioRespaldo!.rolList = [...rolActualizados!];
    alert('Eliminado Correctamente');
  }

  protected getRoles(): RolEntity[] {
    // this.roles =
    return this.roles;
  }

  protected readonly EditarUsuarioComponent = EditarUsuarioComponent;

}
