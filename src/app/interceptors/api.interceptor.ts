import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_KEY, BASE_URL } from '../constants';

@Injectable()
export class APIInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const apiReq = request.clone({
      url: `${BASE_URL}/${request.url}${API_KEY}`,
    });
    return next.handle(apiReq);
  }
}
