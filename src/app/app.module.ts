import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// interceptors
import { URLInterceptor } from './@core/interceptors/url.interceptor';
import { JwtInterceptor } from './@core/interceptors/jwt.interceptor';

// components
import { HeaderModule } from "./@shared/components/header/header.module";

// ngrx imports
import { StoreModule, MetaReducer } from '@ngrx/store';
import { EffectsModule }            from '@ngrx/effects';
import {
  StoreRouterConnectingModule,
  RouterStateSerializer,
} from '@ngrx/router-store';

import { reducers, effects, CustomSerializer } from "./@store/router-store";
import { environment } from '../environments/environment';

// not used in production
import { StoreDevtoolsModule }  from '@ngrx/store-devtools';
import { storeFreeze }          from 'ngrx-store-freeze';

export const metaReducers: MetaReducer<any>[] = !environment.production
  ? [storeFreeze]
  : [];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HeaderModule,
    BrowserAnimationsModule,

    // NGRX MODULES
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot(effects),
    StoreRouterConnectingModule.forRoot(),
    environment.production ? [] : StoreDevtoolsModule.instrument(),
  ],
  providers: [
    { provide: RouterStateSerializer, useClass: CustomSerializer },
    { provide: HTTP_INTERCEPTORS    , useClass: URLInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
