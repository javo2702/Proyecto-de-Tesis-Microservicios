import { ChangeDetectorRef, Component } from '@angular/core';
import { ApiService } from 'src/app/backend/services/api.service';
import { Table } from '../../../orders/components/mesas/mesas.component';
import { Router } from '@angular/router';
import { User } from 'src/app/pages/auth/model/user.interface';
import { OrderItem } from '../../../orders/components/register/register.component';
import { CajeroService } from 'src/app/backend/services/cajero.service';
import { PedidoResponse } from 'src/app/backend/interfaces/pedido';
import { Order } from '../../../orders/components/pedidos/pedidos.component';
import { InventarioService } from 'src/app/backend/services/inventario.service';
import { PedidoService } from 'src/app/backend/services/pedido.service';
import { TransaccionService } from 'src/app/backend/services/transaccion.service';
import { TransaccionRequest } from 'src/app/backend/interfaces/transaccion';
import { format } from 'date-fns';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent {
  loading: Boolean = true
  fecha: Date = new Date()
  descripcion: string = ""
  monto: number = 0
  mensaje:string = ""
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

  //pedido
  pedido: PedidoResponse | undefined
  selectedPedido:Order | undefined
  orden: OrderItem[] = []

  constructor(
    private router:Router,
    //private apiService: ApiService,
    //private cajeroService:CajeroService,
    private inventarioService: InventarioService,
    private pedidoService: PedidoService,
    private transaccionService: TransaccionService,
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
          this.loading = false
          this.cdr.detectChanges()
        })
      })
      .then(()=>{
          this.getTablesByLocation("principal")
          this.loading = false
          this.cdr.detectChanges()
        }
      )
      .catch((error)=>{
        this.loading = false
        this.cdr.detectChanges()
        console.log(error)
      })
  }
  navigateRegister(i:Table) {
    this.descripcion = ""
    this.monto = 0
    if(i.estado!=="disponible"){
      this.showDetailsTable = true
      this.orden = []
      this.pedidoService.getPedidoDetalleMesa(i.id)
      .then(pedido=>{
        this.pedido = pedido
      })
      .then(()=>{
        if(this.pedido){
          this.pedido.detalles?.forEach((d)=>{
            this.inventarioService.getProduct(d.idproducto)
              .then((producto)=>{
                this.descripcion += d.cantidad + " " + producto.nombre + " - " + producto.precio + " \n"
                this.monto += producto.precio * d.cantidad
                this.orden.push(
                  {
                    cantidad:d.cantidad,
                    productoId: d.idproducto,
                    descripcion: producto.nombre,
                    subtotal: producto.precio * d.cantidad
                  }
                )
                this.cdr.detectChanges()
              })
              .catch(error => {
                console.error(error);
              });
          })
        }
        this.cdr.detectChanges
      })
      .catch(error => {
        console.error(error);
      });
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
    let transaccion:TransaccionRequest = {
      monto: this.monto,
      fecha: format(this.fecha, 'yyyy-MM-dd HH:mm:ss'),
      idorigen: this.pedido?.idpedido,
      idtipo: 1,
      descripcion: this.descripcion
    }
    this.transaccionService.registrarOrder(transaccion).then(
      (response)=>{
        this.mensaje = "Se ha registrado el pago del pedido [ "+ this.pedido?.idpedido + " ] de manera exitosa"
        this.descripcion = ""
        this.monto = 0
        this.pedidoService.endOrderState(this.pedido?.idpedido!)
        .then((response)=>{
          console.log(response);
          this.mesasDisponibles = []
          this.pedidoService.restoreTableState(this.pedido?.idmesa!)
          .then((mesas)=>{
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
            this.registrarTransaccionOrden()
            this.cdr.detectChanges()
          })
          .catch(error => {
            console.error(error);
          });
          this.showDetailsTable = false;
          this.pedido = undefined
          this.orden = []
          this.cdr.detectChanges()
        })
        .catch(error => {
          console.error(error);
        });
      }
    )
    .catch(error => {
      this.mensaje = "Hubo un problema al registrar el pago del pedido [ "+ this.pedido?.idpedido + " ] "
      console.error(error);
    });
  }
  registrarTransaccionOrden(){

  }
}
