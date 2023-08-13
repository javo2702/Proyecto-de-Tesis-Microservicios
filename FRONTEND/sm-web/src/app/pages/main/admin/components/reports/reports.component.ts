import { Component } from '@angular/core';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent {
  showDetallesVentas:boolean = false
  fechaVentas:string="10/10/2021"
  showDetallesPagos:boolean = false
  fechaPagos:string="10/10/2021"
  currentIndex:number =1
  pagination:string[] = []
  fechaActual: Date = new Date()
  currentMonthVentas:number = 1
  currentMonthPagos:number = 1
  monthVentas:string = ""
  monthPagos:string = ""
  meses:string[] = [
    "Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Setiembre","Octubre","Noviembre","Diciembre"
  ]
  constructor(){
    this.currentMonthVentas = this.fechaActual.getMonth()
    this.currentMonthPagos = this.fechaActual.getMonth()
    this.monthVentas = this.meses[this.currentMonthVentas]
    this.monthPagos = this.meses[this.currentMonthVentas]
  }
  nextMonth(){
    if(this.currentMonthVentas+1>11){
      this.currentMonthVentas = 0
    } else{
      this.currentMonthVentas = this.currentMonthVentas + 1
    }
    this.monthVentas = this.meses[this.currentMonthVentas]
  }
  previousMonth(){
    if(this.currentMonthVentas-1<1){
      this.currentMonthVentas = 11
    } else{
      this.currentMonthVentas = this.currentMonthVentas - 1
    }
    this.monthVentas = this.meses[this.currentMonthVentas]
  }
  nextMonthPagos(){
    if(this.currentMonthPagos+1>11){
      this.currentMonthPagos = 0
    } else{
      this.currentMonthPagos = this.currentMonthPagos + 1
    }
    this.monthPagos = this.meses[this.currentMonthPagos]
  }
  previousMonthPagos(){
    if(this.currentMonthPagos-1<1){
      this.currentMonthPagos = 11
    } else{
      this.currentMonthPagos = this.currentMonthPagos - 1
    }
    this.monthPagos = this.meses[this.currentMonthPagos]
  }


  previous(){}
  toNumber(p:string){}
  next(){}
  registrar(){
    
  }
}
