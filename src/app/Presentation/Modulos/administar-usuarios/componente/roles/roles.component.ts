import {Component, OnInit} from '@angular/core';
import {RolEntity } from 'src/app/Domain/Entities/Entities';
import {UsuariosComponent} from "../usuarios/usuarios.component";
import {RolService} from "../../../../../Services/Rol/rol.service";

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {
  static readonly ROUTE = 'roles';

  roles!: RolEntity[];

  constructor(private rolService:RolService) {
  }
  ngOnInit(): void {
    this.findAllRoles();
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

}

