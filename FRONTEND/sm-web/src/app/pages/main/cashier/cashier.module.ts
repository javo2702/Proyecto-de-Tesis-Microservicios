import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablesComponent } from './components/tables/tables.component';
import { PaymetsComponent } from './components/paymets/paymets.component';
import { HomeComponent } from './components/home/home.component';



@NgModule({
  declarations: [
    TablesComponent,
    PaymetsComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CashierModule { }
