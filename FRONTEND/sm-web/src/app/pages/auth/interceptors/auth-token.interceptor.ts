import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { first, Observable, switchMap } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log("GG")
    const isFoodListRequest = req.method === 'GET' && req.url.includes('/inventary/foodlist');
    return this.authService.isLoggedIn$.pipe(
      first(),
      switchMap((isLoggedIn) => {
        if (isLoggedIn === false || false) {
          console.log("HABER SI PASA")
          return next.handle(req);
        } else{
          console.log("ACA HAY ALGO RARO")
        }

        return this.authService.user$.pipe(
          first(Boolean),
          switchMap(({ token }) => {
            console.log("errorrrr")
            const headers = req.headers.append(
              'Authorization',
              `Bearer ${token}`
            );
            return next.handle(req);
          })
        );
      })
    );
  }
}

export const authTokeninterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthTokenInterceptor,
  multi: true,
};
