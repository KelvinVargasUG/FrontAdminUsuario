import {Pipe, PipeTransform} from '@angular/core';
import {RolEntity} from "../../../../Domain/Entities/Rol.entity";

@Pipe({
  name: 'rolListFormatHuman'
})
export class RolListFormatHumanPipe implements PipeTransform {

  transform(value: RolEntity[], ...args: unknown[]): string {
    if (!value) return '';
    return value.map(rol => rol.nombre.substring(4)).join(' - ');
  }

}
