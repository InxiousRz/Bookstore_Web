import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  @Output() side_nav_event = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }


  hideSideNav(){
    this.side_nav_event.emit(false);
  }

}
