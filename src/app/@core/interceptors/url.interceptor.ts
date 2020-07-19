import { Injectable } from '@angular/core';

import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable()
export class URLInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // const url = 'https://my-json-server.typicode.com/sanskarsakya/gittest';
    const url = 'https://pz-school.herokuapp.com'
    // const url = 'https://localhost:3000'
    req = req.clone({
      url: url + req.url
    });
    return next.handle(req);
  }
}