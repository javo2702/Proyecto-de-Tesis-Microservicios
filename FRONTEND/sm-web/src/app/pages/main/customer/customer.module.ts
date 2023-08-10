import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer.component';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { ValoracionComponent } from './components/valoracion/valoracion.component';
import { hasRole } from '../../auth/guards/has-role.guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const routes = [
  { 
    canActivate: [hasRole(['Customer', 'Manager'])],
    canLoad: [hasRole(['Customer', 'Manager'])],
    path: '', component: CustomerComponent,
    children: [
      {
        path: 'menu',
        component: MenuComponent,
      },
      {
        path: 'valoracion',
        component: ValoracionComponent
      },
    ]
  }
];
@NgModule({
  declarations: [
    CustomerComponent,
    MenuComponent,
    ValoracionComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CustomerModule { }
