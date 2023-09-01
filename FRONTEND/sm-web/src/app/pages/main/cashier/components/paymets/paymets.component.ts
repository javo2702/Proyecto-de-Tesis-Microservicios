import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { format } from 'date-fns';
import { Filtro } from 'src/app/backend/interfaces/filtro';
import { Transaccion, TransaccionRequest } from 'src/app/backend/interfaces/transaccion';
import { ApiService } from 'src/app/backend/services/api.service';
import { CajeroService } from 'src/app/backend/services/cajero.service';
import { TransaccionService } from 'src/app/backend/services/transaccion.service';

@Component({
  selector: 'app-paymets',
  templateUrl: './paymets.component.html',
  styleUrls: ['./paymets.component.css']
})
export class PaymetsComponent implements OnInit{
  dateForm = new FormGroup({
    date_: new FormControl(new Date().toISOString()),
  })
  registerForm = new FormGroup({
    nombres: new FormControl(""),
    monto: new FormControl("")
  })
  fecha: Date = new Date();
  fechaInputValue:string = this.fecha.toISOString()
  mensaje:string = ""
  showForm:boolean = false
  currentIndex:number =1
  pagination:string[] = []
  currentMonth:number = this.fecha.getMonth();
  month:string = ""
  meses:string[] = [
    "Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Setiembre","Octubre","Noviembre","Diciembre"
  ]
  transacciones: Transaccion[] = []
  constructor(
    private apiService: ApiService,
    //private cajeroService:CajeroService,
    private transaccionService: TransaccionService,
    private cdr:ChangeDetectorRef
  ){
    this.fecha = new Date(this.dateForm.get("date_")?.value!!)
    console.log("fecha1: "+this.fecha.toDateString())
    this.month = this.meses[this.currentMonth]
    console.log(this.currentMonth)
  }
  ngOnInit(): void {
    this.dateForm.get("date_")?.setValue(new Date(this.fecha).toISOString());
    this.getTransacciones();
  }
  changeDate(newDate:string){
    console.log(newDate+"/*/*/*/*/*")
    this.fecha = new Date(newDate);
    this.dateForm.get("date_")?.setValue(new Date(this.fecha).toISOString());
    this.fecha = new Date(this.dateForm.get("date_")?.value!!);
    this.currentMonth = this.fecha.getMonth();
    
    // Actualiza el input de fecha
    this.fechaInputValue = this.fecha.toISOString()

    console.log("fecha2: " + format(this.fecha, 'yyyy-MM-dd hh-mm-ss'));
    this.cdr.detectChanges();

    // Actualiza el mes en el input de fecha y en los botones de navegación
    this.month = this.meses[this.fecha.getMonth()];
  }
  previousMonth() {
    this.fecha.setMonth(this.fecha.getMonth() - 1);
    //console.log("*** "+this.fecha.getFullYear()+"/"+(this.fecha.getMonth())+"/"+this.fecha.getDate())
    //console.log("||||||| "+this.fecha.getDate())
    this.month = this.meses[this.fecha.getMonth()];
    //this.changeDate(this.fecha.getFullYear()+"/"+(this.fecha.getMonth()-1)+"/"+this.fecha.getDate())
  }

  nextMonth() {
    this.fecha.setMonth(this.fecha.getMonth() + 1);
    //console.log("*** "+this.fecha.getFullYear()+"/"+(this.fecha.getMonth()+1)+"/"+this.fecha.getDate())
    this.month = this.meses[this.fecha.getMonth()];
    //this.changeDate(this.fecha.getFullYear()+"/"+(this.fecha.getMonth())+"/"+this.fecha.getDate())
  }
  /*nextMonth(){
    this.currentMonth = (this.currentMonth + 1) % 12;
    this.month = this.meses[this.currentMonth];
    this.fecha = this.fecha.setMonth(this.currentMonth);
    
    this.updateDate();
  }
  previousMonth(){
    this.currentMonth = (this.currentMonth - 1 + 12) % 12;
    this.month = this.meses[this.currentMonth]
    this.fecha.setMonth(this.currentMonth);
    this.cdr.detectChanges()
    this.updateDate();
  }
  updateDate() {
    this.fecha.setMonth(this.currentMonth);
    this.dateForm.get("date_")?.setValue(new Date(this.fecha).toISOString());
    console.log("fecha3:"+this.fecha.toDateString())
    this.cdr.detectChanges()
  }*/
  previous(){}
  toNumber(p:string){}
  next(){}
  registrar(){
    
  }
  closeModal(){
    this.showForm=false;
  }
  getTransacciones(){
    var filtro: Filtro = {fecha: "%"+format(this.fecha, 'yyyy-MM-dd')+"%"}
    this.transaccionService.getPagosFecha(filtro)
    .then(transacciones=>{
        this.transacciones = transacciones
        console.table(transacciones)
        this.cdr.detectChanges();
    })
    .catch(error=>{
      console.log(error)
      this.mensaje = error
    })
  }
  savePayment(){
    let transaccion: TransaccionRequest = {
      monto: Number(this.registerForm.get("monto")?.value),
      fecha: format(this.fecha, 'yyyy-MM-dd HH:mm:ss'),
      idorigen: undefined,
      idtipo: 2,
      descripcion: this.registerForm.get("nombres")?.value!
    }
    this.transaccionService.registrarPago(transaccion).then(
      response=>{
        if(response.idtransaccion){
          this.mensaje = "Pago registrado con éxito"
        }
      }
    ).catch(error=>{
      console.log(error)
      this.mensaje = error
    })
  }
}