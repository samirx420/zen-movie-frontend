import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

// CONTAINERS
import * as fromContainers from './containers';

// COMPONENTS
import * as fromComponents from './components';

// STORE
import { MovieStoreModule } from '../../@store/movie-store/movie-store.module';
import { WatchListStoreModule } from '../../@store/watchlist-store/watchlist-store.module';

export const ROUTES: Routes = [
  {
    path: '',
    component: fromContainers.LandingComponent
  }
]

@NgModule({
  declarations: [...fromContainers.containers, ...fromComponents.components],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(ROUTES),
    MovieStoreModule,
    WatchListStoreModule,
  ]
})
export class LandingModule { }

