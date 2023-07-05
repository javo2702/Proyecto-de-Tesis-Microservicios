import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Order } from '../orders/components/pedidos/pedidos.component';
import { PedidoResponse } from 'src/app/backend/interfaces/pedido';
import { ApiService } from 'src/app/backend/services/api.service';
import { format } from 'date-fns';

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KitchenComponent implements OnInit{
  /* order: Order[] = [
    {id:1,descripcion:"Descripcion",estado:"Preparando",mesa:1,hora:"3:00pm"},
    {id:2,descripcion:"Descripcion",estado:"Preparando",mesa:2,hora:"3:00pm"},
    {id:3,descripcion:"Descripcion",estado:"Preparando",mesa:3,hora:"3:00pm"},
    {id:4,descripcion:"Descripcion",estado:"Preparando",mesa:4,hora:"3:00pm"},
    {id:5,descripcion:"Descripcion",estado:"Preparando",mesa:5,hora:"3:00pm"},
    {id:6,descripcion:"Descripcion",estado:"Preparando",mesa:6,hora:"3:00pm"},
    {id:7,descripcion:"Descripcion",estado:"Preparando",mesa:7,hora:"3:00pm"}
  ] */

  currentDate: Date = new Date();
  date = this.currentDate.getDate() + " / " + (this.currentDate.getMonth()+1) + " / " + this.currentDate.getFullYear()

  showlisto:boolean=true;
  filter:string='recibido'
  pedidos:PedidoResponse[] = []
  pedidoCopy:PedidoResponse[] = []
  pedidoTemp:PedidoResponse | undefined
  showNotification:boolean = false
  showConfirmationAlert:boolean=false
  notificationMessage:string=""
  notificationType:string="success"
  constructor(
    private apiService: ApiService,
    private cdr:ChangeDetectorRef
  ) {
   // this.getProducts()
  }
  ngOnInit() {
    this.getPedidos().then(
      ()=>{
        this.filtrar("recibido")
      }
    )
  }
  ngAfterViewInit(){
    console.log("after view init")
  }
  async getPedidos():Promise<void>{
    console.log("getting")
    let detallesPedidos:PedidoResponse[] = []
    const currentDate = new Date()
    const formattedDate = format(currentDate, 'yyyy-MM-dd');
    this.apiService.getPedidos(formattedDate)
      .then(pedidos => {
        pedidos.forEach((p)=>{
          this.apiService.getPedidoDetalle(p.idpedido)
          .then(pedido=>{
            detallesPedidos.push(pedido)
            this.cdr.detectChanges()
          })
          .catch(error => {
            console.error(error);
          });
        })
      })
      .then(()=>{
          this.pedidos = detallesPedidos
          this.pedidoCopy = this.pedidos
          this.cdr.detectChanges()
        }
      )
      .then(()=>{
        this.cdr.detectChanges() 
      })
      .catch(error => {
        console.error(error);
      });
  }
  async showPedidos():Promise<void>{
    await this.getPedidos()
    this.filtrar("recibido")
  }

  ready(i:PedidoResponse):void{
    let detallesPedidos:PedidoResponse[] = []
    let idpedido = i.idpedido
    let pedido = {
      fecha_pedido: null,
      monto_pedido:  null,
      estado_pedido: "listo",
      idmozo_pedido: null,
      idmesa_pedido: null,
      detalles_pedido: null,
    }
    const currentDate = new Date()
    const formattedDate = format(currentDate, 'yyyy-MM-dd');
    this.apiService.changeStatePedido(idpedido,pedido,formattedDate)
    .then(pedidos => {
      pedidos.forEach((p)=>{
        this.apiService.getPedidoDetalle(p.idpedido)
        .then(pedido=>{
          detallesPedidos.push(pedido)
          this.cdr.detectChanges()
        })
        .catch(error => {
          console.error(error);
        });
      })
    })
    .then(()=>{
        this.pedidos = detallesPedidos
        this.pedidoCopy = this.pedidos
        this.cdr.detectChanges()
        this.showNotification = true
        this.notificationMessage = "Estado del pedido cambiado a listo"
        this.notificationType = "success"
        setTimeout(() => {
          this.showNotification = false;
          this.cdr.detectChanges()
        }, 1000);
      }
    )
    .then(()=>{this.cdr.detectChanges()})
    .catch(error => {
      console.error(error);
    });
  }
  /*remove(i:PedidoResponse):void{
    this.showNotification = true
    this.notificationMessage = "Se ha eliminado el pedido"
    this.notificationType = "error"
    setTimeout(() => {
      this.showNotification = false;
      this.cdr.detectChanges()
    }, 1500);
  }*/
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
    this.apiService.deletePedido(this.pedidoTemp!.idpedido,this.pedidoTemp!.idmesa,formattedDate)
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
  filtrar(state:string):void{
    console.log("filtrando")
    if(state==="listo"){
      this.filter = 'listo'
      this.showlisto = true
    } else{
      this.filter='recibido'
      this.showlisto=false;
    }
    this.pedidos = this.pedidoCopy.filter(({estado}:PedidoResponse)=>{
      return estado.toLowerCase().includes(state)
    })
  }
}
