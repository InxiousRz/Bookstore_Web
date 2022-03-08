import { Component, OnInit } from '@angular/core';
import { BookListviewSellerComponent } from '../book-listview-seller/book-listview-seller.component';
import { SideBarComponent } from '../side-bar/side-bar.component';

@Component({
  selector: 'app-dashboard-seller-page',
  templateUrl: './dashboard-seller-page.component.html',
  styleUrls: ['./dashboard-seller-page.component.css']
})
export class DashboardSellerPageComponent implements OnInit {

  show_sidenav: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  sideNavHandler(state: boolean){

    if(state == true){
      this.show_sidenav = true;
    } else {
      this.show_sidenav = false;
    }
    

  }

}
