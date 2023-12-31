import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablesComponent } from './components/tables/tables.component';
import { PaymetsComponent } from './components/paymets/paymets.component';
import { HomeComponent } from './components/home/home.component';
import { CashierComponent } from './cashier.component';
import { RouterModule } from '@angular/router';
import { hasRole } from '../../auth/guards/has-role.guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DateInputDirective } from 'src/app/shared/directives/date-input.directive';

const routes = [
  { 
    canActivate: [hasRole(['Cashier', 'Manager'])],
    canLoad: [hasRole(['Cashier', 'Manager'])],
    path: '', 
    component: CashierComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'tables',
        component: TablesComponent
      },
      {
        path: 'payments',
        component: PaymetsComponent
      },
    ],
  }
];


@NgModule({
  declarations: [
    TablesComponent,
    PaymetsComponent,
    HomeComponent,
    CashierComponent,
    DateInputDirective,
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes),
    ReactiveFormsModule,FormsModule
  ]
})
export class CashierModule { }


