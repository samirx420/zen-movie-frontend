import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// CONTAINERS
import * as fromContainers from './containers';

// COMPONENTS
import * as fromComponents from './components';
import { HeaderModule } from 'src/app/@shared/components/header/header.module';

// STORE
import { MovieStoreModule } from '../../@store/movie-store/movie-store.module';
import { ReviewStoreModule } from '../../@store/review-store/review-store.module';

export const ROUTES: Routes = [
  {
    path: '',
    component: fromContainers.LandingComponent
  },
  {
    path: 'watchlist',
    component: fromContainers.WatchlistComponent,
    pathMatch: 'full'
  },
  {
    path: 'booking-history',
    component: fromContainers.BookingHistoryComponent,
    pathMatch: 'exact'
  },
  {
    path: ':id',
    component: fromContainers.DetailComponent,
    pathMatch: 'exact'
  },
  {
    path: 'booking/:id',
    component: fromContainers.BookingComponent,
    pathMatch: 'exact'
  },
]

@NgModule({
  declarations: [...fromContainers.containers, ...fromComponents.components],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(ROUTES),
    MovieStoreModule,
    ReviewStoreModule,
    HeaderModule,
  ]
})
export class LandingModule { }

