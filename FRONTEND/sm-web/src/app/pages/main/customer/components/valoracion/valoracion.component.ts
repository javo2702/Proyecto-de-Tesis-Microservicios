import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-valoracion',
  templateUrl: './valoracion.component.html',
  styleUrls: ['./valoracion.component.css']
})
export class ValoracionComponent {
  opinionForm = new FormGroup({
    nombres: new FormControl('', {
        validators: [Validators.required],
        nonNullable: true,
    }),
    valoraion: new FormControl('',{
      validators: [Validators.required],
        nonNullable: true,
    }),
    opinion: new FormControl('', {
        validators: [Validators.required],
        nonNullable: true,
    }),
  });
  maxRating: number = 5;
  initialRating: number = 0;

  stars: number[] = [];
  currentRating: number = this.initialRating;

  ngOnInit() {
    this.stars = Array(this.maxRating).fill(0).map((_, i) => i + 1);
    this.currentRating = this.initialRating;
  }

  rate(rating: number) {
    this.currentRating = rating;
    //this.ratingClicked.emit(rating);
  }
  valorar(){
    console.log("Valoración");
  }
}
