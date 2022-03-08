import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-book-order',
  templateUrl: './book-order.component.html',
  styleUrls: ['./book-order.component.css']
})
export class BookOrderComponent implements OnInit {

  constructor(
    public activeModal: NgbActiveModal, 
    private modalService: NgbModal,
  ) { }

  ngOnInit(): void {
  }


  cancelOrder(){

    this.activeModal.dismiss("CANCEL");

  }

}
