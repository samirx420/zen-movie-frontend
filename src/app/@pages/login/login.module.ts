import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './container/login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import * as fromContainers from './container';
import { Routes, RouterModule } from '@angular/router';

const ROUTES: Routes = [
  {
    path:'',
    component: fromContainers.LoginComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule, 
    FormsModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
