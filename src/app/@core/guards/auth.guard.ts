import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad } from '@angular/router';



// STORE
import { Store } from '@ngrx/store';
// import * as fromAuthStore from '@app/@store/auth-store';
import { tap, filter, take, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        // private store: Store<fromAuthStore.AuthState>,
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        // return this.store
        //     .select(fromAuthStore.getIsAuthenticated).pipe(
        //         tap((isAuthenticated: boolean) => {
        //             if (!isAuthenticated) {
        //                 this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        //             }
        //         }),
        //         take(1),
        //         switchMap(() => of(true)),
        //         catchError(() => of(false))
        //     );

        return null;

    }

}