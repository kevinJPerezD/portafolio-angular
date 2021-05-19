import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    var caja = $('#caja');
    caja.css('height', '100px').css('width', '100px').css('background', 'red');
    caja.click(function(){
      
      $("body").css("background", "black");
    });
  }
}
