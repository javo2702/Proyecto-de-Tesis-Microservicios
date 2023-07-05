import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders.component';
import { RouterModule } from '@angular/router';
import { MesasComponent } from './components/mesas/mesas.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { hasRole } from '../../auth/guards/has-role.guard';
import { RegisterComponent } from './components/register/register.component';
import { ProductoComponent } from './components/register/components/producto/producto.component';
import { ActualizarComponent } from './components/actualizar/actualizar.component';


const routes = [
    { 
      canActivate: [hasRole(['Orders', 'Manager'])],
      canLoad: [hasRole(['Orders', 'Manager'])],
      path: '', 
      component: OrdersComponent,
      children: [
        {
          path: 'tables',
          component: MesasComponent,
        },
        {
          path: 'orderlist',
          component: PedidosComponent
        },
        {
          path: 'orderlist/update',
          component: ActualizarComponent
        },
        {
          path: 'tables/register',
          component: RegisterComponent
        }
      ],
    }
];
@NgModule({
  declarations: [
    OrdersComponent,
    MesasComponent,
    PedidosComponent,
    RegisterComponent,
    ProductoComponent,
    ActualizarComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class OrdersModule { }
