import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';
import { IsLoggedInGuard } from './pages/auth/guards/is-logged-in.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'main'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    canLoad: [IsLoggedInGuard], //Falta agregar IsLoggedInGuard
    loadChildren: () => 
      import('./pages/main/main.module').then(
        (m) => m.MainModule
      )
  },
  {
    path: 'customer',
    loadChildren: () => 
      import('./pages/main/customer/customer.module').then(
        (m) => m.CustomerModule
      )
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
