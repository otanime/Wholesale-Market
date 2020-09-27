import { Component, OnInit, ViewEncapsulation, EventEmitter, Input, Output } from '@angular/core';

import { TypeVehicule } from "../../../modules/typeVehicule";
import { TypeVehiculeService } from "../type-vehicule.service";

declare var $ :any;

@Component({
  selector: 'app-type-vehicule-details',
  templateUrl: './type-vehicule-details.component.html',
  styleUrls: ['./type-vehicule-details.component.css']
})
export class TypeVehiculeDetailsComponent implements OnInit {

  @Input()  typeVehicule: TypeVehicule

  constructor() { }

  ngOnInit() {
  }

}
