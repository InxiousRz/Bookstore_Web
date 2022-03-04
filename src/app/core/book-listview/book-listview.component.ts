import { Component, OnInit } from '@angular/core';
import { BookNodeComponent } from '../book-node/book-node.component';

@Component({
  selector: 'app-book-listview',
  templateUrl: './book-listview.component.html',
  styleUrls: ['./book-listview.component.css']
})
export class BookListviewComponent implements OnInit {

  page: number = 1;
  data_per_page: number = 5;
  total_data: number = 5;

  constructor() { }

  ngOnInit(): void {
  }

  pageHandler(page_number: number){

  }

}
