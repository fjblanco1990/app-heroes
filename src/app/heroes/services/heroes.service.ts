import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HeroeReponse } from './../interfaces/heroes.interfaces';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private base_url: string = environment.base_url;

  constructor(private http: HttpClient) { }

  getHeroesList(): Observable<HeroeReponse[]>{
    return this.http.get<HeroeReponse[]>(`${this.base_url}/heroes`);
  }

  getHeroesById(id_heroe: string): Observable<HeroeReponse>{
    return this.http.get<HeroeReponse>(`${this.base_url}/heroes/${id_heroe}`);
  }

  getSuggestions(query: string): Observable<HeroeReponse[]>{
    return this.http.get<HeroeReponse[]>(`${this.base_url}/heroes?q=${query}&_limit=6`);
  }

  saveHeroe(heroe: HeroeReponse): Observable<HeroeReponse>{
    return this.http.post<HeroeReponse>(`${this.base_url}/heroes`,heroe);
  }

  editHeroe(heroe: HeroeReponse): Observable<HeroeReponse>{
    return this.http.put<HeroeReponse>(`${this.base_url}/heroes/${heroe.id}`,heroe);
  }

  deleteHeroe(id_heroe: string): Observable<boolean>{
    return this.http.delete<boolean>(`${this.base_url}/heroes/${id_heroe}`);
  }

}
