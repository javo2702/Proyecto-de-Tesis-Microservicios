import { ChangeDetectorRef, Component } from '@angular/core';
import { ApiService } from 'src/app/backend/services/api.service';
import { Table } from '../../../orders/components/mesas/mesas.component';
import { Router } from '@angular/router';
import { User } from 'src/app/pages/auth/model/user.interface';
import { OrderItem } from '../../../orders/components/register/register.component';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent {
  user: User | null = null;
  order: OrderItem[] = []
  showPrincipal:boolean = false
  showTerraza:boolean = false
  showPiscina:boolean = false
  //borrar
  table:number = 1
  total:number = 0
  showNoRegisterTable:boolean = false
  showDetailsTable:boolean = false
  showWarning:boolean = false
  mesasDisponibles:Table[] = []
  mesasCopy:Table[]=[]

  constructor(
    private router:Router,
    private apiService: ApiService,
    private cdr:ChangeDetectorRef
  ){

  }

  ngOnInit(): void {
    this.getMesas()
  }
  getMesas(){
    this.apiService.getTables()
      .then(mesas=>{
        mesas.forEach((m)=>{
          if(m.estado==="disponible"){
            this.mesasDisponibles.push(
              {
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
    if(i.estado!=="disponible"){
      this.showDetailsTable = true
      //this.router.navigate(['/orders/tables/register'],{queryParams:{tableSeletected:i.numero}})
    } else{
      this.showWarning = true
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
  cobrar(){
    
  }
}
