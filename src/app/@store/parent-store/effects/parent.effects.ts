import { Injectable } from '@angular/core';

import { Effect, Actions, ofType, createEffect } from '@ngrx/effects';

import { of }                           from 'rxjs';
import { map, switchMap, catchError }   from 'rxjs/operators';

import * as parentActions   from '../actions/parent.actions';
import * as fromServices    from '../../../@core/services';

@Injectable()
export class ParentsEffects {
    constructor(
        private actions$      : Actions,
        private parentService: fromServices.ParentService
    ) { }

    @Effect()
    loadParents$ = createEffect(() =>
        this.actions$.pipe(
            ofType(parentActions.LOAD_PARENT),
            switchMap(() => {
                return this.parentService
                    .getParents()
                    .pipe(
                        map(parents => parentActions.LoadParentSuccess(parents)),
                        catchError(error => of(parentActions.LoadParentFail(error)))
                    )
            }
            )
        )
    );

    @Effect()
    createParent$ = createEffect(() =>
        this.actions$.pipe(
            ofType(parentActions.CreateParent),
            switchMap(({payload}) => {
                return this.parentService
                    .createParent(payload)
                    .pipe(
                        map(service => parentActions.CreateParentSuccess({payload: service})),
                        catchError(error => of(parentActions.CreateParentFail(error)))
                    )
            })
        )
    );

    @Effect()
    updatParent$ = createEffect(() =>
        this.actions$.pipe(
            ofType(parentActions.UpdateParent),
            switchMap(({ payload }) => {
                console.log(payload);
                return this.parentService
                    .updateParent(payload)
                    .pipe(
                        map(() => parentActions.UpdateParentSuccess({payload: payload})),
                        catchError(error => of(parentActions.UpdateParentFail(error)))
                    )
            })
        )
    );
    
}