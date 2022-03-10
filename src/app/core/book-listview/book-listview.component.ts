import { Component, OnInit } from '@angular/core';
import { BookNodeComponent } from '../book-node/book-node.component';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-book-listview',
  templateUrl: './book-listview.component.html',
  styleUrls: ['./book-listview.component.css']
})
export class BookListviewComponent implements OnInit {

  page: number = 1;
  data_per_page: number = 5;
  total_data: number = 5;

  fetched_books: any[] = [];

  constructor(
    private api: ApiService
  ) { }

  ngOnInit(): void {

    this.loadBooks(null)

  }

  pageHandler(page_number: number){

  }


  loadBooks(name_search: string | null){
    this.api.getBooks(
      name_search,
      null,
      this.page,
      this.data_per_page
    ).subscribe((data: any)=>{

      if (data.body 
        && data.body["Success"]
      ){
        
        console.log(data);
        this.fetched_books = data.body["Modified_Payload"]["Body"]['List_Data'];

      }
      
    });
  }

}
