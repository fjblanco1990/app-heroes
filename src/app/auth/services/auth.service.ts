import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, Observable, of, tap } from 'rxjs';
import { Auth } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl: string = environment.base_url;
  private _auth!: Auth | undefined ;
  
  get auth(): Auth {
    return  {...this._auth! }
  }

  constructor(private http: HttpClient) { }

  verificaAutenticacion(): Observable<boolean> {
      if( !localStorage.getItem('token')) {
        return of(false);
      }
      return this.http.get<Auth>(`${this.baseUrl}/usuarios/1`).pipe(
        map(//sirve para transofrmar la inforomacion
          auth => {
            this._auth = auth;
            return true;
          }

        )
      )
  }

  login(): Observable<Auth> {
    return this.http.get<Auth>(`${this.baseUrl}/usuarios/1`).pipe(
      tap( response =>  this._auth = response ),
      tap( auth => localStorage.setItem('token', auth.id))
    );
  }

  logout(): Observable<boolean> {
    const $logut = of(true)
    this._auth = undefined;
    return $logut;
  }
}
