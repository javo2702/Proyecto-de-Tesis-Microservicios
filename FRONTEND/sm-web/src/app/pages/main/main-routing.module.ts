import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { hasRole, HasRoleGuard } from '../auth/guards/has-role.guard';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { MainComponent } from './main/main.component';
//import { BackOfficeLayoutComponent } from './back-office-layout/back-office-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'main',
        component: MainComponent,
      },
      {
        path: 'orders',
        canActivate: [hasRole(['Orders', 'Manager'])],
        canLoad: [hasRole(['Orders', 'Manager'])],
        // canActivate: [HasRoleGuard],
        // canLoad: [HasRoleGuard],
        // data: {
        //   allowedRoles: ['Orders', 'Manager'],
        // },
        loadChildren: () =>
          import('./orders/orders.module').then((m) => m.OrdersModule),
      },
      {
        path: 'kitchen',
        canActivate: [hasRole(['Kitchen', 'Manager'])],
        canLoad: [hasRole(['Kitchen', 'Manager'])],
        // canActivate: [HasRoleGuard],
        // canLoad: [HasRoleGuard],
        // data: {
        //   allowedRoles: ['Inventory', 'Manager'],
        // },
        loadChildren: () =>
          import('./kitchen/kitchen.module').then((m) => m.KitchenModule),
      },
      {
        path: 'cashier',
        canActivate: [hasRole(['Cashier', 'Manager'])],
        canLoad: [hasRole(['Cashier', 'Manager'])],
        // canActivate: [HasRoleGuard],
        // canLoad: [HasRoleGuard],
        // data: {
        //   allowedRoles: ['Inventory', 'Manager'],
        // },
        loadChildren: () =>
          import('./cashier/cashier.module').then((m) => m.CashierModule),
      },
      {
        path: 'admin',
        canActivate: [hasRole(['Manager'])],
        canLoad: [hasRole(['Manager'])],
        // canActivate: [HasRoleGuard],
        // canLoad: [HasRoleGuard],
        // data: {
        //   allowedRoles: ['Inventory', 'Manager'],
        // },
        loadChildren: () =>
          import('./admin/admin.module').then((m) => m.AdminModule),
      },
      /*{
        path: 'customer',
        canActivate: [hasRole(['Customer', 'Manager'])],
        canLoad: [hasRole(['Customer', 'Manager'])],
        loadChildren: () =>
          import('./customer/customer.module').then(
            (m) => m.CustomerModule
          ),
      },*/
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
