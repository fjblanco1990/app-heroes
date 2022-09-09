import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from './../../services/heroes.service';
import { HeroeReponse } from './../../interfaces/heroes.interfaces';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {
  heroe!: HeroeReponse;

  constructor(private activatedRoute: ActivatedRoute, private heroes_service: HeroesService, private router: Router) { }

  ngOnInit(): void {
    //asi se obtiene un parametro de la ruta , y si es cambiante se utiliza el subcribe
      this.activatedRoute.params.pipe(
        //SE UTILIZA EL swtchmap para poder ejecutar otro metodo que depende del Id de que llega en la ruta
        switchMap(  ({id}) => 
          this.heroes_service.getHeroesById(id)  
        )
      ).subscribe( (heroe: HeroeReponse) => this.heroe = heroe)
  }

  Regresar(type: string) {
    if(type === 'DC Comics') {
       this.router.navigate([`/heroes/listado/dc`])
    } else {
      this.router.navigate([`/heroes/listado/marvel`])
    }
   
  }
}
