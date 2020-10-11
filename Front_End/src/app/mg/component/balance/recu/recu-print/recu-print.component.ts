import { Component, OnInit, ViewEncapsulation, EventEmitter, Input } from '@angular/core';

import { Pesage } from "../../../../modules/pesage";

@Component({
  selector: 'app-recu-print',
  templateUrl: './recu-print.component.html',
  styleUrls: ['./recu-print.component.css']
})
export class RecuPrintComponent implements OnInit {

  @Input()  pesage: Pesage


  constructor() { }

  ngOnInit() {
  }


  print(){

  
  }

}
