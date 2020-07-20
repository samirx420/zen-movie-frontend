import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// CONTAINERS
import * as fromContainers from './containers';

// COMPONENTS
import * as fromComponents from './components';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';

// STORES
import { MovieStoreModule } from 'src/app/@store/movie-store/movie-store.module';
import { ReactiveFormsModule } from '@angular/forms';

export const ROUTES: Routes = [
  {
    path:'',
    component: fromContainers.MovieComponent
  }
]
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzDrawerModule,
    RouterModule.forChild(ROUTES),
    MovieStoreModule
  ],
  declarations: [...fromContainers.containers, ...fromComponents.components]
})
export class MovieModule { }
