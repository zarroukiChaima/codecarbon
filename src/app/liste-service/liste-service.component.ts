import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-service',
  templateUrl: './liste-service.component.html',
  styleUrls: ['./liste-service.component.css']
})
export class ListeServiceComponent implements OnInit {
  img1:boolean;
  img2:boolean;
  img3:boolean;
  img4:boolean;
  img5:boolean;
  img6:boolean;
  img7:boolean;
  img8:boolean;
  img9:boolean;  

  constructor() {
    this.img1 = true;
    this.img2 = false;
    this.img3 = false;
    this.img4 = false;
    this.img5 = false;
    this.img6 = false;
    this.img7 = false;
    this.img8 = false;
    this.img9 = false;

   }

  ngOnInit(): void {
  }

}
