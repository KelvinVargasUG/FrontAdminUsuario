import { Pipe, PipeTransform } from '@angular/core';

import {RolEntity} from '../../../../../Domain/Entities/Entities';

@Pipe({
  name: 'rolFormatHuman'
})
export class RolFormatHumanPipe implements PipeTransform {

  transform(value: RolEntity, ...args: unknown[]): string {
    return value.nombre.substring(4);
  }

}
