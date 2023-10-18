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
            rol: this.formBuilder.array([
                this.formBuilder.group({
                    id: ['']
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
        });
    }

    protected getUsuarioById(id: number): void {
        this.usuario = this.usuarioService.findByIdUser(id);
       // this.roles = this.rolService.findByUserUnassignedRoles(this.id);
        if (this.usuario != null) {
            this.llenarFormulario();
        } else {
            alert('Usuario no encontrado')
            this.navigateBack();
        }
    }

    protected updateUser(): void {
        if (this.formUser.valid) {
            alert('Actualizado Correctamente');
        } else {
            alert('Formulario Invalido');
        }
    }

    protected navigateBack(): void {
        this.location.back();
    }

}
