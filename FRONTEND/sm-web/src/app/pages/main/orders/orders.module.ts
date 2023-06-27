import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders.component';
import { RouterModule } from '@angular/router';
import { MesasComponent } from './components/mesas/mesas.component';


const routes = [{ path: '', component: OrdersComponent }];
@NgModule({
  declarations: [
    OrdersComponent,
    MesasComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class OrdersModule { }
