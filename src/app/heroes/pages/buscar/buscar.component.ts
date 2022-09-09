import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { HeroeReponse } from '../../interfaces/heroes.interfaces';
import { HeroesService } from './../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {
  termino : string = '';
  heores: HeroeReponse [] = [];
  heroeSeleccionado!: HeroeReponse;
  showSimpleHeroe: boolean = false;
  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
    console.log(this.heroeSeleccionado)
  }

  buscar() {
    this.heroesService.getSuggestions(this.termino.trim()).subscribe( suggestion => this.heores = suggestion);
  }

  optionSelected(event: MatAutocompleteSelectedEvent) {
    if(!event.option.value) {//si se pone ! es que no tiene nungin valor si se pone solo es por que tiene valor
      this.showSimpleHeroe = false;
      return;
    }
    this.heroesService.getHeroesById(event.option.value).subscribe(
      response => {
        this.showSimpleHeroe  = true;
        this.heroeSeleccionado = response;
        console.log(response);
      }
    )
  }

}
