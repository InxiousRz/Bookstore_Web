import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginPageComponent } from './core/login-page/login-page.component';
import { DashboardGeneralPageComponent } from './core/dashboard-general-page/dashboard-general-page.component';
import { DashboardSellerPageComponent } from './core/dashboard-seller-page/dashboard-seller-page.component';

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
    path: 'dashboard-seller',
    // canActivate: [UserAccessGuard],
    component: DashboardSellerPageComponent
  },
  // {
  //   path: 'history',
  //   canActivate: [RouteGuardGuard],
  //   component: DashboardPageComponent,
  //   children: [
  //     { path: '', redirectTo: 'user-access', pathMatch: 'full' },
  //     {
  //       path: 'user-access', // child route path
  //       canActivate: [RouteGuardGuard],
  //       component: UserAccessComponent // child route component that the router renders
  //     },
  //     {
  //       path: 'log-activity',
  //       canActivate: [RouteGuardGuard],
  //       component: ActivityLogComponent // another child route component that the router renders
  //     },
  //     {
  //       path: 'log-activity-detail/:uid',
  //       canActivate: [RouteGuardGuard],
  //       component: ActivityLogDetailComponent // another child route component that the router renders
  //     },
  //   ]
  // },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
