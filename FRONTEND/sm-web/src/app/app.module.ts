import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AuthModule } from './pages/auth/auth.module';
import { AppRoutingModule } from './app-routing.module';

import { FakeBackendModule } from './fake-backend/fake-backend.module';
import { authTokeninterceptorProvider } from './pages/auth/interceptors';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HttpClientModule,
    FakeBackendModule
  ],
  //providers: [authTokeninterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
