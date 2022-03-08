import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-book-detail-seller',
  templateUrl: './book-detail-seller.component.html',
  styleUrls: ['./book-detail-seller.component.css']
})
export class BookDetailSellerComponent implements OnInit {

  constructor(
    public activeModal: NgbActiveModal, 
    private modalService: NgbModal,
  ) { }

  ngOnInit(): void {
  }


}
