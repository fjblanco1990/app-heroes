import { Pipe, PipeTransform } from '@angular/core';
import { HeroeReponse } from '../interfaces/heroes.interfaces';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(heroe: HeroeReponse): string {
    return heroe.id === '' || heroe.id == null ? '': '';
  }

}
