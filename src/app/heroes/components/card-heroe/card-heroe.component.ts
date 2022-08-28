import { Component, Input, OnInit } from '@angular/core';
import { HeroeReponse } from './../../interfaces/heroes.interfaces';

@Component({
  selector: 'app-card-heroe',
  templateUrl: './card-heroe.component.html',
  styleUrls: ['./card-heroe.component.css']
})
export class CardHeroeComponent implements OnInit {
  @Input() heroe!: HeroeReponse;
  constructor() { }

  ngOnInit(): void {
  }

}
