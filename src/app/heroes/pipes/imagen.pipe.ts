import { Pipe, PipeTransform } from '@angular/core';
import { HeroeReponse } from '../interfaces/heroes.interfaces';

@Pipe({
  name: 'imagen',
  pure: false //sirve para la detecion de cambios
})
export class ImagenPipe implements PipeTransform {

  transform(heroe: HeroeReponse): string { 
    //
      if((heroe.id !== '' && heroe.id !== null && heroe.id) && (!heroe.alt_image)) {
        
        return  `assets/heroes/${heroe.id}.jpg`

      } else if (heroe.alt_image) {
        
        return ( heroe.id !== '' || heroe.id !== null) ?  `${heroe.alt_image?.toString()}`: `assets/no-image.png`;

      } else {

        return `assets/no-image.png`
      }
  }

}
