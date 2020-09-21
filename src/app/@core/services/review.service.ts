import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ResponseWrapper } from '../models/response.model';
import { Paged } from '../models/paged.model';
import { Review } from '../models/review.model';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private http: HttpClient) { }

  getReviews(movieId: number, paged:Paged): Observable<ResponseWrapper<Review>> {
    console.log('ReviewService : getReviews')
    return this.http
      .get<ResponseWrapper<Review>>(`/api/v1/reviews/${movieId}?page=${paged.page}&limit=${paged.pageSize}`)
      .pipe(catchError((error: any) => throwError(error)));
  }

  createReview(payload: Review): Observable<Review> {

    return this.http
      .post<Review>(`/api/v1/reviews`, payload)
      .pipe(catchError((error: any) => throwError(error)));
  }

  updateReview(payload: Review): Observable<Review> {
    return this.http
      .put<Review>(`/api/v1/reviews/${payload.id}`, payload)
      .pipe(catchError((error: any) => throwError(error)));
  }
}
