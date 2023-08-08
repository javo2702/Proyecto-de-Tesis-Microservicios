import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DetallesPedidoResponse, PedidoResponse } from 'src/app/backend/interfaces/pedido';
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

  showlisto:boolean=false;
  filter:string='recibido'
  pedidos:Order[] = []
  pedidoCopy:Order[] = []
  pedidoTemp:Order | undefined
  showNotification:boolean = false
  showConfirmationAlert:boolean=false
  notificationMessage:string=""
  notificationType:string="success"
  loading:boolean = true
  constructor(
    private apiService: ApiService,
    private cdr:ChangeDetectorRef
  ) {
   // this.getProducts()
  }
  ngOnInit() {
    this.getPedidos()
  }
  ngAfterViewInit(){

  }
  async getPedidos():Promise<void>{
    let detallesPedidos:Order[] = []
    const currentDate = new Date()
    const formattedDate = format(currentDate, 'yyyy-MM-dd');
    this.apiService.getPedidos(formattedDate)
      .then(pedidos => {
        pedidos.forEach((p)=>{
          this.apiService.getPedidoDetalle(p.idpedido)
          .then(pedido=>{
            let pp = this.getDetallePedido(pedido)
            detallesPedidos.push(pp)
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
          this.loading = false
          //this.filtrar("recibido")
          this.cdr.detectChanges()
        })
      .catch(error => {
        console.error(error);
      });
  }
  getDetallePedido(p:Order):Order{
    let descripcion = ""
    p.detalles?.forEach((d)=>{
      this.apiService.getProduct(d.idproducto)
        .then((producto)=>{
          descripcion = descripcion + d.cantidad + " " + producto.nombre + " - " + producto.precio + "<br/>"
          p.desc = descripcion
          this.cdr.detectChanges()
        })
        .catch(error => {
          console.log(error);
        });
    })
    return p
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
          let pp = this.getDetallePedido(pedido)
          detallesPedidos.push(pp)
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
  remove(i:Order):void{
    this.showConfirmationAlert = true
    this.pedidoTemp = i
  }
  cancelRemove():void{
    this.showConfirmationAlert = false
  }
  deleteOrder():void{
    let detallesPedidos:PedidoResponse[] = []
    this.showConfirmationAlert = false
    const currentDate = new Date()
    const formattedDate = format(currentDate, 'yyyy-MM-dd');
    this.apiService.deletePedido(this.pedidoTemp!.idpedido,this.pedidoTemp!.idmesa,formattedDate)
      .then((pedidos)=>{
        pedidos.forEach((p)=>{
          this.apiService.getPedidoDetalle(p.idpedido)
          .then(pedido=>{
            let pp = this.getDetallePedido(pedido)
            detallesPedidos.push(pp)
            this.cdr.detectChanges()
          })
          .catch(error => {
            console.error(error);
          });
        })
      })
      .then(()=>{
        this.pedidos = detallesPedidos
        this.showNotification = true
        this.notificationMessage = "El pedido ha sido cancelado"
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
    if(state==="listo"){
      this.filter = 'listo'
      this.showlisto = true
    } else{
      this.filter='recibido'
      this.showlisto=false;
    }
  }
}
export interface Order extends PedidoResponse{
  desc?:string
}