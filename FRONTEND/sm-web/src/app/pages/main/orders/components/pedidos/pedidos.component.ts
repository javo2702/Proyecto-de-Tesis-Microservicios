import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { format } from 'date-fns';
import { DetallesPedidoResponse, PedidoResponse } from 'src/app/backend/interfaces/pedido';
import { ApiService } from 'src/app/backend/services/api.service';
import { OrderItem } from '../register/register.component';
import { Router } from '@angular/router';
import { PedidoService } from 'src/app/backend/services/pedido.service';
import { InventarioService } from 'src/app/backend/services/inventario.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit{

  loading:Boolean = true
  success:Boolean = false

  currentDate: Date = new Date();
  date = this.currentDate.getDate() + " / " + (this.currentDate.getMonth()+1) + " / " + this.currentDate.getFullYear()

  pedidos:PedidoResponse[] = []
  selectedPedido:Order | undefined

  pedidoTemp:PedidoResponse | undefined
  order: OrderItem[] = []
  total: number | undefined
  
  showDetalles:boolean = false
  showConfirmationAlert:boolean = false
  showNotification: boolean = false
  notificationMessage:string = ""
  notificationType = "success"
  constructor(
    private router:Router,
    //private apiService: ApiService,
    private pedidoService: PedidoService,
    private inventarioService: InventarioService,
    private cdr:ChangeDetectorRef
  ) {
   // this.getProducts()
  }
  ngOnInit() {
    this.getPedidos()
  }
  getPedidos(){
    let detallesPedidos:PedidoResponse[] = []
    const currentDate = new Date()
    const formattedDate = format(currentDate, 'yyyy-MM-dd');
    this.pedidoService.getPedidos(formattedDate)
      .then(pedidos => {
        pedidos.forEach((p)=>{
          this.pedidoService.getPedidoDetalle(p.idpedido)
          .then(pedido=>{
            detallesPedidos.push(pedido)
            this.success = true
            this.cdr.detectChanges()
          })
          .catch(error => {
            console.error(error);
          });
        })
        this.loading = false
        this.cdr.detectChanges()
      })
      .then(()=>{
          this.pedidos = detallesPedidos
          this.cdr.detectChanges()
        }
      )
      .then(()=>{this.cdr.detectChanges()})
      .catch(error => {
        console.error(error);
        this.loading = false
        this.success = false
        this.cdr.detectChanges()
      });
  }
  getDetallePedido(p:PedidoResponse){
    let descripcion = ""
    p.detalles?.forEach((d)=>{
      this.inventarioService.getProduct(d.idproducto)
        .then((producto)=>{
          descripcion = descripcion + d.cantidad + " " + producto.nombre + " - " + producto.precio + '\n' 
          this.selectedPedido = {
            id:p.idpedido,
            descripcion:descripcion,
            estado:p.estado,
            mesa:p.idmesa,
            hora:p.fecha
          };
          this.cdr.detectChanges()
        })
        .catch(error => {
          console.error(error);
        });
    })
    this.showDetalles = true
    if(p.detalles?.length==0){
      this.selectedPedido = {
        id:p.idpedido,
        descripcion:"Sin detalles para mostrar",
        estado:p.estado,
        mesa:p.idmesa,
        hora:p.fecha
      };
    }
  }
  remove(i:PedidoResponse):void{
    this.showConfirmationAlert = true
    this.pedidoTemp = i
  }
  cancelRemove():void{
    this.showConfirmationAlert = false
  }
  deleteOrder():void{
    this.showConfirmationAlert = false
    const currentDate = new Date()
    const formattedDate = format(currentDate, 'yyyy-MM-dd');
    this.pedidoService.deletePedido(this.pedidoTemp!.idpedido,this.pedidoTemp!.idmesa,formattedDate)
      .then((pedidos)=>{
        console.log(pedidos)
        this.pedidos = pedidos
        this.showNotification = true
        this.notificationMessage = "Se ha eliminado el pedido"
        this.notificationType = "error"
        setTimeout(() => {
          this.showNotification = false;
          this.cdr.detectChanges()
        }, 1500);
        this.cdr.detectChanges()
      })
      .catch((error)=>{
        alert("Error al elimianar el producto")
      })
  }
  closeModal(){
    this.showDetalles = false
  }

}

export interface Order{
  id:number,
  descripcion:string,
  estado:string,
  mesa:number,
  hora:string
}
 