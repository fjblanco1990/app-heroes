import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HeroeReponse } from './../../interfaces/heroes.interfaces';

@Component({
  selector: 'app-mat-confirmation',
  templateUrl: './mat-confirmation.component.html',
  styleUrls: ['./mat-confirmation.component.css']
})
export class MatConfirmationComponent implements OnInit {
  
  constructor(public dialogRef: MatDialogRef<MatConfirmationComponent>, @Inject(MAT_DIALOG_DATA) public data: HeroeReponse) {}

  ngOnInit(): void {
  }

  borrar() {
    this.dialogRef.close(true);
  }



}
