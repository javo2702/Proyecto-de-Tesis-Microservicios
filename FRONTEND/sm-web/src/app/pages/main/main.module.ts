import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { AuthModule } from '../auth/auth.module';
import { HeaderComponent } from './header/header.component';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main/main.component';
import { CtableComponent } from '../shared/componentes/ctable/ctable.component';



@NgModule({
  declarations: [
    MainLayoutComponent,
    MainComponent,
    HeaderComponent,
    
  ],
  imports: [
    CommonModule,AuthModule,MainRoutingModule
  ]
})
export class MainModule { }
