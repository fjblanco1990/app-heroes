import { Component,  OnDestroy, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { HeroeReponse } from './../../interfaces/heroes.interfaces';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  list_heroes: HeroeReponse[] = [];

  constructor(private heroes_service: HeroesService, private activatedRoute: ActivatedRoute, private router: Router) { }

 

  ngOnInit() {

    //this.router.events.subscribe(() => {//con esto me subscribo a los cambios en la url
      this.heroes_service.getHeroesList().subscribe(
        (response: HeroeReponse[]) => {
          //if (this.activatedRoute.snapshot.paramMap.get('type') === 'dc') {//asi obtengo el parametro de la ruta
            this.list_heroes = response;
        }
      );
    //});
    
  }




}
