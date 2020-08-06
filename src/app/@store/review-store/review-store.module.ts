import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// store
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers, effects } from '.';

// nz zorro
import { NzMessageModule } from 'ng-zorro-antd/message';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NzMessageModule,
    StoreModule.forFeature('review', reducers),
    EffectsModule.forFeature(effects),
  ]
})
export class ReviewStoreModule { }
