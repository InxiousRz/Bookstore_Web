import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  registering: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  switchForm(identifier: number){
    
    if(identifier === 1){
      this.registering = false;
    }

    if(identifier === 2){
      this.registering = true;
    }

  }

}
