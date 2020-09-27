import { Component, OnInit, ViewEncapsulation, EventEmitter, Input, Output } from '@angular/core';

import { TypeEvenement } from "../../../modules/typeEvenement";

@Component({
  selector: 'app-type-evenement-details',
  templateUrl: './type-evenement-details.component.html',
  styleUrls: ['./type-evenement-details.component.css']
})
export class TypeEvenementDetailsComponent implements OnInit {

  @Input()  typeEvenement: TypeEvenement

  constructor() { }

  ngOnInit() {
  }

}
