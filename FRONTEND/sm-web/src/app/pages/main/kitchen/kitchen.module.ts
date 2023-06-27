import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KitchenComponent } from './kitchen.component';
import { RouterModule } from '@angular/router';


const routes = [{ path: '', component: KitchenComponent }];
@NgModule({
  declarations: [
    KitchenComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class KitchenModule { }
