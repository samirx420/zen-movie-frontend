import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        let currentUser = this.authenticationService.currentUserValue;
        if (currentUser && currentUser.jwt) {
            console.log('jwt', currentUser)
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser.jwt}`,
                    api_key: `$2y$10$DZuUfJ27NZ82CKGSZvTHyuCckTkla/58K28D.oXoYwHEbcS8IC4VG`
                }
            });
        }
                // request = request.clone({
                //     setHeaders: {
                //         Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1OTMzNTk5MjAsImRhdGEiOnsiaWQiOjEsInVzZXJuYW1lIjoicHV6YW5zYWt5YSIsImZpcnN0X25hbWUiOiJwdXphbiIsImxhc3RfbmFtZSI6InNha3lhIiwiYXZhdGFyIjoiIiwiY3JlYXRlZF9hdCI6IjIwMjAtMDYtMjNUMTg6MzI6MDkuNzE3WiIsIm1vZGlmaWVkX2F0IjpudWxsLCJkZWxldGVkX2F0IjpudWxsLCJzdGF0dXMiOnRydWV9LCJpYXQiOjE1OTMzNTYzMjB9.7a1afjpYuQwuRQHL0bK-z6-u_qAmwg8bl0fAIDq5T-Q`,
                //         api_key: `$2y$10$DZuUfJ27NZ82CKGSZvTHyuCckTkla/58K28D.oXoYwHEbcS8IC4VG`
                //     }
                // });

        return next.handle(request);
    }
}