import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';
import { ReportsComponent } from './components/reports/reports.component';
import { hasRole } from '../../auth/guards/has-role.guard';
import { RouterModule } from '@angular/router';
import { NgApexchartsModule } from "ng-apexcharts";
import { RegistrarComponent } from './components/registrar/registrar.component';
import { ValoracionComponent } from './components/valoracion/valoracion.component';
const routes = [
  { 
    canActivate: [hasRole(['Manager'])],
    canLoad: [hasRole(['Manager'])],
    path: '', 
    component: AdminComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'users',
        component: UsersComponent
      },
      {
        path: 'reports',
        component: ReportsComponent
      },
      {
        path: 'valoracion',
        component: ValoracionComponent
      },
      {
        path: 'users/registrar',
        component: RegistrarComponent
      },
    ],
  }
];


@NgModule({
  declarations: [
    AdminComponent,
    HomeComponent,
    UsersComponent,
    ReportsComponent,
    ValoracionComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes),NgApexchartsModule,
  ]
})
export class AdminModule { }

