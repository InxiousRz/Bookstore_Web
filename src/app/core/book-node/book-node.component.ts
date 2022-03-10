import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BookDetailComponent } from '../book-detail/book-detail.component';
import { BookOrderComponent } from '../book-order/book-order.component';

@Component({
  selector: 'app-book-node',
  templateUrl: './book-node.component.html',
  styleUrls: ['./book-node.component.css']
})
export class BookNodeComponent implements OnInit {

  @Input('book_data') book_data: any;

  constructor(
    private modalService: NgbModal,
  ) { }

  ngOnInit(): void {

    console.log(this.book_data)

  }

  openDetail(){
    
    const modalRef = this.modalService.open(BookDetailComponent, { size: 'xl', scrollable: true, centered: true });
    modalRef.componentInstance.book_data = this.book_data;
    

    // modalRef.dismissed.subscribe((data)=>{
    //   console.log("=============== DISSMISS  ==");
    //   console.log(data);
    // });

    modalRef.closed.subscribe((data)=>{

      // if(data === true){

      //   this.task_loading_state = true;
      //   this.loadToDoList()
      //   .subscribe(([success, result])=>{
      //     console.log(success)
      //     console.log(result)
      //     if(success){
      //       let pagination_data = result["Pagination_Data"];
      //       let data = result["List_Data"];
      //       data = this.formatToDoList(data);
      //       this.todo_data_count = data["Count_Task_Total"];
      //       this.todo_data = data["Group_Data"];
      //       this.todo_data_key_list = Object.keys(this.todo_data);
      //     }
      //     this.task_loading_state = false;
      //   });

      // }
      

    });

    // modalRef.hidden.subscribe((data)=>{
    //   console.log("=============== HIDDEN  ==");
    //   console.log(data);
    // });

  }

  openOrder(){
    
    const modalRef = this.modalService.open(BookOrderComponent, { size: 'xl', scrollable: true, centered: true, backdrop: 'static' });
    modalRef.componentInstance.book_data = this.book_data;
    

    // modalRef.dismissed.subscribe((data)=>{
    //   console.log("=============== DISSMISS  ==");
    //   console.log(data);
    // });

    modalRef.closed.subscribe((data)=>{

      // if(data === true){

      //   this.task_loading_state = true;
      //   this.loadToDoList()
      //   .subscribe(([success, result])=>{
      //     console.log(success)
      //     console.log(result)
      //     if(success){
      //       let pagination_data = result["Pagination_Data"];
      //       let data = result["List_Data"];
      //       data = this.formatToDoList(data);
      //       this.todo_data_count = data["Count_Task_Total"];
      //       this.todo_data = data["Group_Data"];
      //       this.todo_data_key_list = Object.keys(this.todo_data);
      //     }
      //     this.task_loading_state = false;
      //   });

      // }
      

    });

    // modalRef.hidden.subscribe((data)=>{
    //   console.log("=============== HIDDEN  ==");
    //   console.log(data);
    // });

  }

}
