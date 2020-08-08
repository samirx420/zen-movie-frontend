import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Movie } from '../models/movie.model';
import { ResponseWrapper } from '../models/response.model';
import { Paged } from '../models/paged.model';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http: HttpClient) { }
  // page:number, size:number
  // getMovies(paged:Paged): Observable<ResponseWrapper<Movie>> {
  //   return this.http
  //     .get<ResponseWrapper<Movie>>(`/api/v1/movies?page=${paged.page}&limit=${paged.pageSize}`)
  //     .pipe(catchError((error: any) => throwError(error)));
  // }

  // getMovieDetail(movieId: number): Observable<Movie> {
  //   return this.http
  //     .get<Movie>(`/api/v1/movies/${movieId}`)
  //     .pipe(catchError((error: any) => throwError(error)));
  // }

  book(payload: any): Observable<any> {

    return this.http
      .post<any>(`/api/v1/bookings`, payload)
      .pipe(catchError((error: any) => throwError(error)));
  }
  
  getBookedSeats(payload): Observable<any> {

    return this.http
      .post<any>(`/api/v1/bookings/booked-seats`, payload)
      .pipe(catchError((error: any) => throwError(error)));
  }

  // updateMovie(payload: Movie): Observable<Movie> {
  //   return this.http
  //     .put<Movie>(`/api/v1/movies/${payload.id}`, payload)
  //     .pipe(catchError((error: any) => throwError(error)));
  // }
}
