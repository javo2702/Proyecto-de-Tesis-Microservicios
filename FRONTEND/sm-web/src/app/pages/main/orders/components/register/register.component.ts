import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../../auth/auth.service';
import { User } from '../../../../auth/model/user.interface';
import { Producto } from 'src/app/backend/interfaces/producto';
import { ApiService } from 'src/app/backend/services/api.service';
import { HttpClient } from '@angular/common/http';
import { Categoria } from 'src/app/backend/interfaces/categoria';
import { DetallesPedidoRequest, PedidoRequest, PedidoResponse } from 'src/app/backend/interfaces/pedido';
import { format, addHours } from 'date-fns';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, AfterViewInit{

  table:number = -1;
  currentUser$ = this.authService.user$;
  user: User | null = null;
  orderRegistered: PedidoResponse | undefined
  selectedCategory:number = -1
  productosshow: Producto[] = []
  productosapi: Producto[] = []
  productoscopy: Producto[] = []
  categoriasapi: Categoria[] = [];
  order: OrderItem[] = []
  total: number | undefined
  pagination:string[] = []
  currentIndex:number=1

  showNotification: boolean = false;
  showRegisterOk:boolean = false;
  showNoOrderItems:boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private authService: AuthService,
    private apiService: ApiService,
    public http: HttpClient,
    private cdr:ChangeDetectorRef
  ) {
    this.getUser()
  }
  ngAfterViewInit(): void {
    //this.getProductsByCategory(this.categoriasapi![0])
  }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.table = params['tableSeletected'];
    });
    this.getProducts()
    this.getCategories()
  }
  getProducts(){
    this.apiService.getProductList()
      .then(productos => {
        this.productosapi = productos
        this.productoscopy = this.productosapi
        this.pagination = []
        for(let i=0;i<this.productosapi.length/6;i++){
          this.pagination.push((i+1).toString())
        }
        this.productosshow = this.productosapi.slice(this.currentIndex-1,6*this.currentIndex)
        if(this.categoriasapi){
          this.getProductsByCategory(this.categoriasapi![0])
        }
          
        this.cdr.detectChanges()
      })
      .catch(error => {
        console.error(error);
      });
  }
  getCategories(){
    this.apiService.getCategoryList()
      .then(categorias => {
        this.categoriasapi = categorias;
        this.getProductsByCategory(this.categoriasapi![0])
        this.cdr.detectChanges()
      })
      .catch(error => {
        console.error(error);
      });
  }
  getProductsByCategory(cat:Categoria){
    let actived = this.categoriasapi?.indexOf(cat)!
    let previousActived = this.selectedCategory
    this.selectedCategory = actived
    if(previousActived!= -1){
      this.categoriasapi![previousActived].actived = false
    }
    this.categoriasapi![actived].actived = true
    this.productosapi = this.productoscopy.filter(({categoria}:Producto)=>{
      return categoria.toLowerCase().includes(cat.nombre)
    })  
    this.productosshow = this.productosapi.slice(this.currentIndex-1,6*this.currentIndex)
    this.pagination = []
    for(let i=0;i<this.productosapi.length/6;i++){
      this.pagination.push((i+1).toString())
    }
  }
  getUser():void{
    this.currentUser$.subscribe(
      (usuario:any)=>{
        this.user = usuario
      },
      (error) => {
        alert("Error al obtener el nombre del módulo");
      }
    )
  }

  increment(item:OrderItem):void{
    let itemaux = this.order[this.order.indexOf(item)]
    itemaux.cantidad = itemaux.cantidad + 1
    let precio = this.getProductPrice(itemaux.productoId)
    itemaux.subtotal = precio * itemaux.cantidad
    this.order[this.order.indexOf(item)] = itemaux
    this.calcTotal()
  }
  decrement(item:OrderItem):void{
    let itemaux = this.order[this.order.indexOf(item)]
    if(itemaux.cantidad>0){
      itemaux.cantidad = itemaux.cantidad - 1
      let precio = this.getProductPrice(itemaux.productoId)
      itemaux.subtotal = precio * itemaux.cantidad
      this.order[this.order.indexOf(item)] = itemaux
    }
    if(itemaux.cantidad == 0){
      this.order.splice(this.order.indexOf(item),1)
    }
    this.calcTotal()
  }
  add(producto:Producto):void{
    let newId = -1
    let orderId = -1
    let item = {cantidad:1,productoId:producto.idproducto,descripcion:producto.nombre,subtotal:producto.precio}
    orderId = this.existInOrderList(producto.idproducto)
    if(orderId!=-1){
      this.increment(this.order[orderId])
    } else{
      this.order.push(item)
    }
    this.calcTotal()
  }
  remove(item:OrderItem):void{
    this.order.splice(this.order.indexOf(item),1)
  }
  registerOrder():void{
    if(this.order.length>0){
      console.log("Enviando orden...")
    const currentDate = new Date();
    const formattedDate = format(currentDate, 'yyyy-MM-dd HH:mm:ss');
    let detalles: DetallesPedidoRequest[] = []
    this.order.forEach((i)=>{
      detalles.push({idproducto_detalles:i.productoId,cantidad_detalles: i.cantidad})
    })
    let pedido: PedidoRequest = {
      fecha_pedido:formattedDate,
      monto_pedido:this.total!,
      estado_pedido:"Recibido",
      idmozo_pedido:1,
      idmesa_pedido:Number(this.table),
      detalles_pedido:detalles
    }
    console.log(pedido)
    this.apiService.setPedido(pedido)
      .then(pedidoRegistrado=>{
        console.log(pedidoRegistrado)
        this.orderRegistered = pedidoRegistrado
        this.showRegisterOk = true
        this.cdr.detectChanges()
        this.order = []
      })
    }
    else{
      this.showNoOrderItems = true
    }
  }

  cancelOrder():void{
    this.order = []
    this.router.navigateByUrl('/orders/tables')
  }
  showAddedNotificacionMessage():void{
    this.showNotification = true;
    setTimeout(() => {
      this.showNotification = false;
      console.log(this.showNotification)
    }, 1000);
  }
  getProductPrice(id:number):number{
    let precioaux = 0
    this.productosapi?.forEach((p)=>{
      if(p.idproducto==id){
        precioaux = p.precio!
      }
    })
    return precioaux
  }
  existInOrderList(id:number):number{
    let idInOrder = -1
    this.order.forEach((i)=>{
      if(i.productoId==id){
        idInOrder = this.order.indexOf(i)

      }
    })
    return idInOrder
  }
  calcTotal(){
    let subtotal = 0
    this.order.forEach((i)=>{
      subtotal = subtotal + i.subtotal
    })
    this.total = subtotal
  }
  closeModal(){
    this.showRegisterOk = false
    this.router.navigate(['/orders/tables'])
  }
  closeModalError(){
    this.showNoOrderItems = false
  }
  toNumber(index:string){
    this.currentIndex = Number(index)
    this.productosshow = []
    this.productosshow = this.productosapi.slice(6*(this.currentIndex-1),6*this.currentIndex)
  }
  next(){
    if(this.currentIndex+1<=this.pagination.length){
      this.currentIndex = this.currentIndex + 1
    }
    this.productosshow = []
    this.productosshow = this.productosapi.slice(6*(this.currentIndex-1),6*this.currentIndex)
  }
  previous(){
    if(this.currentIndex-1>0){
      this.currentIndex = this.currentIndex - 1
    }
    this.productosshow = []
    this.productosshow = this.productosapi.slice(6*(this.currentIndex-1),6*this.currentIndex)
  }
}

export interface OrderItem {
  cantidad: number;
  productoId: number;
  descripcion: string;
  subtotal: number;
}
