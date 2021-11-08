import { Injectable, Inject, Injector } from '@angular/core';
import { HttpClient, HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse, HttpErrorResponse, HttpBackend } from '@angular/common/http';
// import 'rxjs/add/operator/catch';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';
import { GlobalService } from '../services';
@Injectable({
  providedIn: 'root'
})

export class Interceptor implements HttpInterceptor {
  private httpClient: HttpClient;
  constructor(handler: HttpBackend, public inj: Injector, public global: GlobalService, public route: Router) {
    this.httpClient = new HttpClient(handler);
  }
  private applyCredentials = (req: HttpRequest<any>, token: string) => {
    return req.clone({
      setHeaders: {
        // 'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        Authorization: 'Bearer ' + token
      }
    });
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const global = this.inj.get(GlobalService);
    const authReq = this.applyCredentials(req, global.token);
    return next.handle(authReq)
      .pipe(map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          return event;
        } else {
          return event;
        }
      }),
        catchError((error: any) => {
          if (error instanceof HttpErrorResponse) {
            return throwError(error);
          } else {
            return throwError(error);
          }
        })
      );
  }
}
