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
export class MovieService {

  constructor(private http: HttpClient) { }
  // page:number, size:number
  getMovies(paged:Paged): Observable<ResponseWrapper<Movie>> {
    return this.http
      .get<ResponseWrapper<Movie>>(`/api/v1/movies?page=${paged.page}&limit=${paged.pageSize}`)
      .pipe(catchError((error: any) => throwError(error)));
  }

  getMovieDetail(movieId: number): Observable<Movie> {
    return this.http
      .get<Movie>(`/api/v1/movies/${movieId}`)
      .pipe(catchError((error: any) => throwError(error)));
  }

  createMovie(payload: {movie: Movie, buffer: File}): Observable<Movie> {
    const formData: FormData = new FormData();
    formData.append('title', payload.movie.title);
    formData.append('description', payload.movie.description);
    formData.append('duration', payload.movie.duration);
    formData.append('release_date', payload.movie.release_date);
    formData.append('budget', payload.movie.budget);

    if(payload.buffer != null){
      formData.append('poster', payload.buffer);
    }

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
