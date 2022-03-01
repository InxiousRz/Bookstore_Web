import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './core/login-page/login-page.component';
import { SideBarComponent } from './core/side-bar/side-bar.component';
import { SearchBarComponent } from './core/search-bar/search-bar.component';
import { BookNodeComponent } from './core/book-node/book-node.component';
import { BookListviewComponent } from './core/book-listview/book-listview.component';
import { BookDetailComponent } from './core/book-detail/book-detail.component';
import { BookOrderComponent } from './core/book-order/book-order.component';
import { ResetPassPageComponent } from './core/reset-pass-page/reset-pass-page.component';
import { DashboardGeneralPageComponent } from './core/dashboard-general-page/dashboard-general-page.component';
import { DashboardSellerPageComponent } from './core/dashboard-seller-page/dashboard-seller-page.component';
import { BookNodeSellerComponent } from './core/book-node-seller/book-node-seller.component';
import { BookDetailSellerComponent } from './core/book-detail-seller/book-detail-seller.component';
import { BookFormComponent } from './core/book-form/book-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    SideBarComponent,
    SearchBarComponent,
    BookNodeComponent,
    BookListviewComponent,
    BookDetailComponent,
    BookOrderComponent,
    ResetPassPageComponent,
    DashboardGeneralPageComponent,
    DashboardSellerPageComponent,
    BookNodeSellerComponent,
    BookDetailSellerComponent,
    BookFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
