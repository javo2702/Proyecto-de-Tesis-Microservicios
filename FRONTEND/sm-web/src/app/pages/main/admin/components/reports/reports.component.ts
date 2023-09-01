import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { format } from 'date-fns';
import { Filtro } from 'src/app/backend/interfaces/filtro';
import { Transaccion } from 'src/app/backend/interfaces/transaccion';
import { TransaccionService } from 'src/app/backend/services/transaccion.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit{
  fecha: Date = new Date()
  mensaje:string = ""
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
  pagosFecha: Transaccion[] = []
  totalPagosFecha: number = 0
  pagosMostrados: number = 6
  ventasFecha:Transaccion[]=[]
  totalVentasFecha: number = 0
  ventasMostradas:number = 6
  constructor(
    private transaccionService: TransaccionService,
    private cdr:ChangeDetectorRef
  ){
    this.currentMonthVentas = this.fechaActual.getMonth()
    this.currentMonthPagos = this.fechaActual.getMonth()
    this.monthVentas = this.meses[this.currentMonthVentas]
    this.monthPagos = this.meses[this.currentMonthVentas]
  }
  ngOnInit(): void {
    this.getTransaccionesPagos()
    this.getTransaccionesVentas()
  }

  getTransaccionesPagos(){
    var filtro: Filtro = {fecha: "%"+format(new Date('2023-08-31 12:00:00'), 'yyyy-MM-dd')+"%"}
    this.transaccionService.getPagosFecha(filtro)
    .then(transacciones=>{
        this.pagosFecha = transacciones
        this.pagosMostrados = this.totalPagosFecha % 6
        console.log(this.pagosMostrados)
        console.table(transacciones)
        this.cdr.detectChanges();
    })
    .catch(error=>{
      console.log(error)
      this.mensaje = error
    })
  }
  getTransaccionesVentas(){
    var filtro: Filtro = {fecha: "%"+format(new Date('2023-08-22 12:00:00'), 'yyyy-MM-dd')+"%"}
    this.transaccionService.getVentasFecha(filtro)
    .then(transacciones=>{
        this.ventasFecha = transacciones
        console.table(transacciones)
        this.cdr.detectChanges();
    })
    .catch(error=>{
      console.log(error)
      this.mensaje = error
    })
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
