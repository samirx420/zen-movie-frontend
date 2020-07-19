// import { Injectable } from '@angular/core';

// import { Effect, Actions, ofType, createEffect } from '@ngrx/effects';

// import { of }                           from 'rxjs';
// import { map, switchMap, catchError }   from 'rxjs/operators';

// import * as movieActions   from '../actions/movie.actions';
// // import * as fromServices    from '../../../@core/services';

// @Injectable()
// export class MovieEffects {
//     constructor(
//         private actions$      : Actions,
//         // private parentService: fromServices.ParentService
//     ) { }

//     // @Effect()
//     // loadParents$ = createEffect(() =>
//     //     this.actions$.pipe(
//     //         ofType(parentActions.LOAD_PARENT),
//     //         switchMap(() => {
//     //             return this.parentService
//     //                 .getParents()
//     //                 .pipe(
//     //                     map(parents => parentActions.LoadParentSuccess(parents)),
//     //                     catchError(error => of(parentActions.LoadParentFail(error)))
//     //                 )
//     //         }
//     //         )
//     //     )
//     // );

//     // createService$ = createEffect(() =>
//     //     this.actions$.pipe(
//     //         ofType(movieActions.Createo),
//     //         switchMap(({payload}) => {
//     //             return this.serviceService
//     //                 .createService(payload)
//     //                 .pipe(
//     //                     map(service => serviceActions.CreateServiceSuccess({payload: service})),
//     //                     catchError(error => of(serviceActions.CreateServiceFail(error)))
//     //                 )
//     //         })
//     //     )
//     // );

//     // @Effect()
//     // updatParent$ = createEffect(() =>
//     //     this.actions$.pipe(
//     //         ofType(parentActions.UpdateParent),
//     //         switchMap(({ payload }) => {
//     //             console.log(payload);
//     //             return this.parentService
//     //                 .updateParent(payload)
//     //                 .pipe(
//     //                     map(() => parentActions.UpdateParentSuccess({payload: payload})),
//     //                     catchError(error => of(parentActions.UpdateParentFail(error)))
//     //                 )
//     //         })
//     //     )
//     // );
    
// }