import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError }       from 'rxjs/operators';

import { Movie }          from '../models/movie.model';
import { Watchlist } from '../models/watchlist.model';
import { ResponseWrapper }  from '../models/response.model';

@Injectable({
  providedIn: 'root'
})
export class WatchlistService {

  constructor(private http: HttpClient) { }

  getWatchlists(): Observable<ResponseWrapper<Movie>> {
    return this.http
      .get<ResponseWrapper<Movie>>(`/api/v1/watchlists`)
      .pipe(catchError((error: any) => throwError(error)));
  }

  addToWatchlist(payload: Movie): Observable<Movie> {
    let data: Watchlist = {
      movie_id: payload.id
    }
    return this.http
      .post<Movie>(`/api/v1/watchlists`, data)
      .pipe(catchError((error: any) => throwError(error)));
  }
  
  removeFromWatchlist(movie: Movie): Observable<Movie> {
    return this.http
      .delete(`/api/v1/watchlists/${movie.id}`)
      .pipe(catchError((error: any) => throwError(error)));
  }
}
