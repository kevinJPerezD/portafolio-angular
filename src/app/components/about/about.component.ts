import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public title: string;
  public subTitle: string;
  public web: string;

  constructor() {
    this.title = "Kevin Pérez";
    this.subTitle = "Desarrollador";
    this.web = "kejopeweb.com";
   }

  ngOnInit() {
  }

}
