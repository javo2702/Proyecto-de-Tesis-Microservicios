import { ChangeDetectorRef, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/backend/services/api.service';
import { PedidoService } from 'src/app/backend/services/pedido.service';

@Component({
  selector: 'app-mesas',
  templateUrl: './mesas.component.html',
  styleUrls: ['./mesas.component.css']
})
export class MesasComponent implements OnInit{

  columnas:number = 6
  filas:number = 4

  showPrincipal:boolean = false
  showTerraza:boolean = false
  showPiscina:boolean = false

  showBusyTable:boolean = false
  mesasDisponibles:Table[] = []
  mesasCopy:Table[]=[]

  constructor(
    private router:Router,
    //private apiService: ApiService,
    private pedidoService: PedidoService,
    private cdr:ChangeDetectorRef
  ){

  }

  ngOnInit(): void {
    this.getMesas()
  }
  getMesas(){
    this.pedidoService.getTables()
      .then(mesas=>{
        mesas.forEach((m)=>{
          if(m.estado==="disponible"){
            this.mesasDisponibles.push(
              {
                id:m.idmesa,
                numero:m.numero,
                tipo:m.ubcacion,
                estado:m.estado,
                image:
                '/assets/icons/mesa-disponible.png'
              }
            )
          } else{
            this.mesasDisponibles.push(
              {
                id:m.idmesa,
                numero:m.numero,
                tipo:m.ubcacion,
                estado:m.estado,
                image:
                '/assets/icons/mesa-ocupada.png'
              }
            )
          }
          this.mesasCopy = this.mesasDisponibles
          this.cdr.detectChanges()
        })
      })
      .then(()=>{
          this.getTablesByLocation("principal")
          this.cdr.detectChanges()
        }
      )
  }
  navigateRegister(i:Table) {
    if(i.estado==="disponible"){
      this.router.navigate(['/orders/tables/register'],{queryParams:{tableSeletected:i.numero}})
    } else{
      this.showBusyTable = true
    }
    
  }
  getTablesByLocation(location:string){
    if(location==="principal"){
      this.showPrincipal = true
      this.showTerraza = false
      this.showPiscina = false
    }
    if(location==="terraza"){
      this.showPrincipal = false
      this.showTerraza = true
      this.showPiscina = false
    }
    if(location==="piscina"){
      this.showPrincipal = false
      this.showTerraza = false
      this.showPiscina = true
    }
    this.mesasDisponibles = this.mesasCopy.filter(({tipo}:Table)=>{
      return tipo.toLowerCase().includes(location)
    })
  }
  closeModal(){
    this.showBusyTable = false
  }

}
export interface Table{
  id:number,
  numero: number,
  tipo:string,
  image:string,
  estado:string
}
