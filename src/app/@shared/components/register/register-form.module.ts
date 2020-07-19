import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterFormComponent } from './register-form/register-form.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    RegisterFormComponent
  ],
  declarations: [RegisterFormComponent]
})
export class RegisterFormModule { }
