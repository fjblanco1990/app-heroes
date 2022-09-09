import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from './../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad, CanActivate {
 
  constructor(private authService: AuthService, private router: Router) {}

  canLoad(): Observable<boolean> | boolean {//restringe solo la carga de modulos
    return this.authService.verificaAutenticacion().pipe(
      tap( estaAutenticado => {
        if (!estaAutenticado) {
            this.router.navigate(['/auth/login'])
        }
      })
    );
    // if (this.authService.auth.id && this.authService.verificaAutenticacion()) {
    //   return true;
    // }
    // return false;
  }

  canActivate(): Observable<boolean> | boolean {
    return this.authService.verificaAutenticacion().pipe(
      
    );
    // if (this.authService.auth.id) {
    //   return true;
    // }
    // return false;
  }
 
}
