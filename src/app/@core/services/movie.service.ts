import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Movie } from '../models/movie.model';
import { ResponseWrapper } from '../models/response.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getMovies(): Observable<ResponseWrapper<Movie>> {
    return this.http
      .get<ResponseWrapper<Movie>>(`/api/v1/movies`)
      .pipe(catchError((error: any) => throwError(error)));
  }

  getMovieDetail(movieId: number): Observable<Movie> {
    return this.http
      .get<Movie>(`/api/v1/movies/${movieId}`)
      .pipe(catchError((error: any) => throwError(error)));
  }

  createMovie(payload: Movie): Observable<Movie> {
    const formData: FormData = new FormData();
    formData.append('title', payload.title);
    formData.append('description', payload.description);
    formData.append('duration', payload.duration);
    formData.append('release_date', payload.release_date);
    return this.http
      .post<Movie>(`/api/v1/movies`, formData)
      .pipe(catchError((error: any) => throwError(error)));
  }

  updateMovie(payload: Movie): Observable<Movie> {
    return this.http
      .put<Movie>(`/api/v1/movies/${payload.id}`, payload)
      .pipe(catchError((error: any) => throwError(error)));
  }
}
