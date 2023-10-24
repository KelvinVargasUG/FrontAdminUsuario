import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Location} from '@angular/common';
import {ActivatedRoute, Params} from "@angular/router";

import {UsuariosEntity, RolEntity} from '../../../../../Domain/Entities/Entities';
import {UsuarioService, RolService} from '../../../../../Services/Services';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {

  static readonly ROUTE = 'edit';

  protected id!: number;
  protected formUser!: FormGroup;
  protected usuario!: UsuariosEntity | null;
  protected roles: RolEntity[] | undefined;

  ngOnInit(): void {
    this.extraerID();
    this.getUsuarioById(this.id);
  }

  constructor(
    private formBuilder: FormBuilder,
    private location: Location,
    private usuarioService: UsuarioService,
    private activeRouter: ActivatedRoute,
    private rolService: RolService
  ) {
    this.buildForm();
  }

  private extraerID(): void {
    this.activeRouter.params.subscribe((params: Params) => {
      this.id = params['id'];
    });
  }

  private buildForm(): void {
    this.formUser = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      estado: ['', [Validators.required, Validators.pattern(/^[IA]$/)]],
      email: ['', [Validators.required, Validators.email]],
      rolList: this.formBuilder.array([
        this.formBuilder.group({
          id: [0]
        })
      ])
    });
  }

  private llenarFormulario(): void {
    this.formUser.patchValue({
      nombre: this.usuario?.nombre,
      apellido: this.usuario?.apellido,
      email: this.usuario?.email,
      estado: this.usuario?.estado.toUpperCase(),
      rolList: this.usuario?.rolList
    });
  }

  protected getUsuarioById(id: number): void {
    this.usuarioService.findByIdUser(id).subscribe({
      next: (data: any) => {
        if (data.status == 200) {
          this.usuario = data.body;
          this.findAllRoles();
          if (this.usuario != null) {
            this.llenarFormulario();
          }
        }
      },
      error: (error: any) => {
        alert(error.error);
        this.navigateBack();
      }
    })
  }

  protected findAllRoles(): void {
    this.rolService.findAllRoles().subscribe({
      next: (data: RolEntity[]) => {
        this.roles = data;
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

  protected navigateBack(): void {
    this.location.back();
  }

  protected updateUser(): void {
    if (this.formUser.valid) {
      const usuarioFrom: UsuariosEntity = this.formUser.value;
      const idRol = this.formUser.value.rolList[0].id;

      this.updateUserAndHandleErrors(usuarioFrom, idRol);

    } else {
      alert('Formulario Invalido');
    }
  }

  private updateUserAndHandleErrors(usuarioFrom: UsuariosEntity, idRol: number): void {
    this.usuarioService.updateUser(this.id, usuarioFrom).subscribe({
      next: (data: any) => {
        if (data.status === 200) {
          this.updateRol(idRol);
        }
      },
      error: (error: any) => {
        alert("Algo salio mal intente mas tarde");
      }
    });
  }

  private updateRol(idRol: number): void {
    if (idRol !== 0) {
      this.usuarioService.updateRolUser(this.id, idRol).subscribe({
        next: (data: any) => {
          if (data.status === 200) {
            alert('Actualizado Correctamente El Usuario y Su Rol');
          }
        },
        error: (error: any) => {
          alert('Actualizado Correctamente Solo el Usuario');
        }
      });
    } else {
      alert('Actualizado Correctamente');
    }
    this.navigateBack();
  }

}
