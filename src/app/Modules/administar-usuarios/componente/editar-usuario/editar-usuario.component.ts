import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {RolEntity} from "../../../../Domain/Entities/Rol.entity";
import {Location} from '@angular/common';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent {

  static readonly ROUTE = 'edit';

  protected formUser!: FormGroup;
  protected roles: RolEntity[] = [
    {idRol: 1, nombre: 'Rol_Administrador'},
    {idRol: 2, nombre: 'Rol_Usuario'}
  ];

  constructor(
    private formBuilder: FormBuilder,
    private location: Location
  ) {
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

  updateUser(): void {
    if (this.formUser.valid) {
      console.log(this.formUser.value);
      alert('Actualizado Correctamente');
    } else {
      alert('Formulario Invalido');
    }
  }

  navigateBack(): void {
    this.location.back();
  }

}
