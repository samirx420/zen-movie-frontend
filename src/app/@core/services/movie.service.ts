import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError }       from 'rxjs/operators';

import { Parent }          from '../models/parent.model';
import { ResponseWrapper }  from '../models/response.model';

@Injectable({
  providedIn: 'root'
})
export class ParentService {

  constructor(private http: HttpClient) { }

  getParents(): Observable<ResponseWrapper<Parent>> {
    return this.http
      .get<ResponseWrapper<Parent>>(`/api/v1/parents`)
      .pipe(catchError((error: any) => throwError(error)));
  }

  createParent(payload: Parent): Observable<Parent> {
    return this.http
      .post<Parent>(`/api/v1/parents`, payload)
      .pipe(catchError((error: any) => throwError(error)));
  }

  updateParent(payload: Parent): Observable<Parent> {
    console.log('service payload', payload);
    return this.http
      .put<Parent>(`/api/v1/services/${payload.id}`, payload)
      .pipe(catchError((error: any) => throwError(error)));
  }    
}
