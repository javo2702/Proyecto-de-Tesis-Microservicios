import { Component } from '@angular/core';

@Component({
  selector: 'app-paymets',
  templateUrl: './paymets.component.html',
  styleUrls: ['./paymets.component.css']
})
export class PaymetsComponent {
  currentIndex:number =1
  pagination:string[] = []
  fechaActual: Date = new Date()
  currentMonth:number = 1
  month:string = ""
  meses:string[] = [
    "Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Setiembre","Octubre","Noviembre","Diciembre"
  ]
  constructor(){
    this.currentMonth = this.fechaActual.getMonth()
    this.month = this.meses[this.currentMonth]
    console.log(this.currentMonth)
  }
  nextMonth(){
    if(this.currentMonth+1>11){
      this.currentMonth = 0
    } else{
      this.currentMonth = this.currentMonth + 1
    }
    this.month = this.meses[this.currentMonth]
  }
  previousMonth(){
    if(this.currentMonth-1<1){
      this.currentMonth = 11
    } else{
      this.currentMonth = this.currentMonth - 1
    }
    this.month = this.meses[this.currentMonth]
  }
  previous(){}
  toNumber(p:string){}
  next(){}
}