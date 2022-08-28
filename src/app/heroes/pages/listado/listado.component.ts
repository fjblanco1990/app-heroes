import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { HeroeReponse } from './../../interfaces/heroes.interfaces';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  list_heroes: HeroeReponse[] = [];
  constructor(private heroes_service: HeroesService) { }

  ngOnInit(): void {
    this.heroes_service.getHeroesList().subscribe(
      (response: HeroeReponse[]) => this.list_heroes = response   
    );

    this.heroes_service.getHeroes('dc-flash').subscribe(
      (resp_heroe: HeroeReponse)  => {
        console.log(resp_heroe);
        
      }
    )
  }

}
