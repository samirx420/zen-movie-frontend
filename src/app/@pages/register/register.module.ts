import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// CONTAINERS
import * as fromContainers from './containers';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterFormModule } from 'src/app/@shared/components/register/register-form.module';

export const ROUTES:Routes = [
  {
    path:'',
    component: fromContainers.RegisterComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RegisterFormModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [...fromContainers.containers]
})
export class RegisterModule { }
