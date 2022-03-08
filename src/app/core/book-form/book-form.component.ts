import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {


  img_cover_source: string | ArrayBuffer | null = "assets/nocover.jpg";

  constructor() { }

  ngOnInit(): void {
  }


  displayFile(event: any){

    console.log(event.target.files);

    let file = event.target.files[0];

    if(file){

      let reader = new FileReader();

      reader.onload = e => {
        // console.log(reader.result);
        this.img_cover_source = reader.result;
      } 
      reader.readAsDataURL(file);

    }

  }

}
