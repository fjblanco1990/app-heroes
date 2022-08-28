import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HeroeReponse } from './../interfaces/heroes.interfaces';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private url: string  = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getHeroesList(): Observable<HeroeReponse[]>{
    return this.http.get<HeroeReponse[]>(`${this.url}/heroes`);
  }

  getHeroes(id_heroe: string): Observable<HeroeReponse>{
    return this.http.get<HeroeReponse>(`${this.url}/heroes/${id_heroe}`);
  }

}
