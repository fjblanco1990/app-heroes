import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../../../auth/services/auth.service';
import { Auth } from './../../../auth/interfaces/auth.interface';

@Component({
  selector: 'app-menu-nav',
  templateUrl: './menu-nav.component.html',
  styleUrls: ['./menu-nav.component.css']
})
export class MenuNavComponent {
  @Input() sidenav: any;

  public get auth() : Auth {
    return this.authService.auth;
  }
  

  constructor(private router: Router, private authService: AuthService) { }

  logout() {
    //ir al bakcend , confirmar la existencia del usuario
    //un usuario
    this.authService.logout().subscribe(
      resp => {
        if (resp) {
          
          this.router.navigate(['./auth/login']);
        }
      }
    )
    
  }


}
