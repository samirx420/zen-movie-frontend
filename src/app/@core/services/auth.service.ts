import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue() {
    return this.currentUserSubject.value;
  }

  getMyDetail(): Observable<any> {
    return this.http
      .get<any>(`https://pz-job-portal.herokuapp.com/api/v1/users/me`)
      .pipe(catchError((error: any) => throwError(error)));
  }

  login(username: string, password: string) {
    return this.http.post<any>(`http://pz-job-portal.herokuapp.com/api/v1/users/login`, { username, password })
      .pipe(map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      }));
  }
  register(username: string, password: string, first_name: string, last_name: string, fileToUpload: File) {
    const formData: FormData = new FormData();
    formData.append('first_name', first_name);
    formData.append('last_name', last_name);
    formData.append('username', username);
    formData.append('password', password);
    if (fileToUpload) {
      formData.append('avatar', fileToUpload);
    }

    return this.http.post<any>(`http://pz-job-portal.herokuapp.com/api/v1/users/register`, formData)
      .pipe(map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }


}
