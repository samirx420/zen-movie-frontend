import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path        : '',
    loadChildren: () => import('./@pages/landing/landing.module').then(m => m.LandingModule),
  },
  {
    path: 'login',
    loadChildren: () => import(`./@pages/login/login.module`).then(module => module.LoginModule)
  },
  {
    path: 'register',
    loadChildren: () => import(`./@pages/register/register.module`).then(module => module.RegisterModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
