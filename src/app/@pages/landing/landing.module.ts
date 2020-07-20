import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

// CONTAINERS
import * as fromContainers from './containers';

// COMPONENTS
import * as fromComponents from './components';
import { HeaderModule } from 'src/app/@shared/components/header/header.module';

// STORE
import { MovieStoreModule } from '../../@store/movie-store/movie-store.module';

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
    path: ':id',
    component: fromContainers.DetailComponent,
    pathMatch: 'exact'
  },
]

@NgModule({
  declarations: [...fromContainers.containers, ...fromComponents.components],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(ROUTES),
    MovieStoreModule,
    HeaderModule,
  ]
})
export class LandingModule { }

