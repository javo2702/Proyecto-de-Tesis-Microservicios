import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer.component';
import { RouterModule } from '@angular/router';


const routes = [{ path: '', component: CustomerComponent }];
@NgModule({
  declarations: [
    CustomerComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class CustomerModule { }
