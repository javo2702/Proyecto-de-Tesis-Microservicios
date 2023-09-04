import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { format } from 'date-fns';
import { Filtro } from 'src/app/backend/interfaces/filtro';
import { Transaccion } from 'src/app/backend/interfaces/transaccion';
import { ApiService } from 'src/app/backend/services/api.service';
import { CajeroService } from 'src/app/backend/services/cajero.service';
import { TransaccionService } from 'src/app/backend/services/transaccion.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  loading:Boolean = true
  success:Boolean = false
  mensaje: string = ""
  fecha: Date = new Date()
  transacciones: Transaccion[] = []
  currentIndex:number =1
  pagination:string[] = []
  previous(){}
  toNumber(p:string){}
  next(){}
  constructor(
    //private apiService: ApiService,
    //private cajeroService:CajeroService,
    private transaccionService: TransaccionService,
    private cdr:ChangeDetectorRef
  ){

  }
  ngOnInit(): void {
    this.getTransacciones();
  }
  getTransacciones(){
    var filtro: Filtro = {fecha: "%"+format(this.fecha, 'yyyy-MM-dd')+"%"}
    this.transaccionService.getTransaccionesFecha(filtro)
    .then(transacciones=>{
        this.transacciones = transacciones
        console.table(transacciones)
        this.loading = false
        this.success = true
        this.cdr.detectChanges();
    })
    .catch(error=>{
      console.log(error)
      this.mensaje = error
      this.loading = false
      this.success = false
      this.cdr.detectChanges();
    })
  }
}
