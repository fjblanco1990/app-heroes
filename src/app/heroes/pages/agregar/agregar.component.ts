import { Component, OnInit } from '@angular/core';
import { HeroeReponse, Publisher } from '../../interfaces/heroes.interfaces';
import { HeroesService } from './../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatConfirmationComponent } from './../../components/mat-confirmation/mat-confirmation.component';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {
  publishers = [
    {
      id: 'DC Comics',
      description: 'Dc Comics'
    },
    {
      id: 'Marvel Comics',
      description: 'Marvel Comics'
    }
  ];

  heroe: HeroeReponse = {
      superhero: '',
      alter_ego: '',
      first_appearance: '',
      publisher: Publisher.DCComics,
      alt_image: '',
      characters: ''
  }
  
  constructor(private heroesService: HeroesService, private activatedRoute: ActivatedRoute, private router: Router, private _snackBar: MatSnackBar,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      switchMap( ({id}) => {
        return this.heroesService.getHeroesById(id);
      })
    ).subscribe( heroe => {
      this.heroe = heroe;
      console.log(this.heroe)
    })
  }

  guardar() {
    if (this.heroe.superhero.trim().length === 0) {
      return;
    }
    if (this.heroe.id) {
      //actualizo
      this.heroesService.editHeroe(this.heroe).subscribe( resp => {
        this._snackBar.open('Heroe guardado', '', {
          duration: 5000
        });
        this.router.navigate(['/heroes']);
      })
    } else {
      this.heroesService.saveHeroe(this.heroe).subscribe( resp => {
        this.router.navigate(['/heroes/editar', resp.id])
      })
    }
    console.log(this.heroe.id)
  }

  borrar() {
    const dialog = this.dialog.open(MatConfirmationComponent, {
      data: {...this.heroe}
    });

    dialog.afterClosed().subscribe(
      resp => {
        if(resp) {
          this.heroesService.deleteHeroe(this.heroe.id!).subscribe( resp => {
              this.router.navigate(['/heroes']);
          })
        }
      })
  }

  cancelar() {
    this.router.navigate(['/heroes']);
  }
}


