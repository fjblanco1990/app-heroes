import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router, private auth: AuthService) { }


  login() {
    //ir al bakcend , confirmar la existencia del usuario
    //un usuario

    this.auth.login().subscribe( resp => {
      if (resp.id) {
        this.router.navigate(['./heroes']);
      }

    })
    
  }

}
