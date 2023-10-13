import {Pipe, PipeTransform} from '@angular/core';
import {RolEntity} from "../../../../Entities/Rol.entity";

@Pipe({
  name: 'rolFormatHuman'
})
export class RolFormatHumanPipe implements PipeTransform {

  transform(value: RolEntity[], ...args: unknown[]): string {
    if (!value) return '';
    return value.map(rol => rol.nombre.substring(4)).join(' - ');
  }

}
