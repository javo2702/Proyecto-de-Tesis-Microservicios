import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AuthModule } from './pages/auth/auth.module';
import { AppRoutingModule } from './app-routing.module';

import { FakeBackendModule } from './fake-backend/fake-backend.module';
import { authTokeninterceptorProvider } from './pages/auth/interceptors';

import { BackendModule } from './backend/backend.module';
import { ApiService } from './backend/services/api.service'; 

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HttpClientModule,
    FakeBackendModule,
    BackendModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
