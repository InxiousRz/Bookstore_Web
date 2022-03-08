import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginPageComponent } from './core/login-page/login-page.component';
import { DashboardGeneralPageComponent } from './core/dashboard-general-page/dashboard-general-page.component';
import { DashboardSellerPageComponent } from './core/dashboard-seller-page/dashboard-seller-page.component';
import { BookFormComponent } from './core/book-form/book-form.component';
import { BookFormUpdateComponent } from './core/book-form-update/book-form-update.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'dashboard',
    // canActivate: [UserAccessGuard],
    component: DashboardGeneralPageComponent,
  },
  {
    path: 'seller',
    children: [
      {
        path: '', // child route path
        // canActivate: [RouteGuardGuard],
        component: DashboardSellerPageComponent // child route component that the router renders
      },
      {
        path: 'books/add', // child route path
        // canActivate: [RouteGuardGuard],
        component: BookFormComponent // child route component that the router renders
      },
      {
        path: 'books/update/:id', // child route path
        // canActivate: [RouteGuardGuard],
        component: BookFormUpdateComponent // child route component that the router renders
      },
    ]
  },
  { path: '', redirectTo: 'seller/books/add', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
