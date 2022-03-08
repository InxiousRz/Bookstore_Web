import { Component, OnInit } from '@angular/core';
import { BookNodeSellerComponent } from '../book-node-seller/book-node-seller.component';

@Component({
  selector: 'app-book-listview-seller',
  templateUrl: './book-listview-seller.component.html',
  styleUrls: ['./book-listview-seller.component.css']
})
export class BookListviewSellerComponent implements OnInit {

  page: number = 1;
  data_per_page: number = 5;
  total_data: number = 5;

  constructor() { }

  ngOnInit(): void {
  }

  pageHandler(page_number: number){

  }

}
