import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BookOrderComponent } from '../book-order/book-order.component';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  constructor(
    public activeModal: NgbActiveModal, 
    private modalService: NgbModal,
  ) { }

  ngOnInit(): void {
  }

  openOrder(){
    
    const modalRef = this.modalService.open(BookOrderComponent, { size: 'xl', scrollable: true, centered: true, backdrop: 'static' });
    modalRef.componentInstance.name = 'Order Book';
    

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
