import { Component, OnInit, ViewEncapsulation, EventEmitter, Input, Output } from '@angular/core';

import { Vehicule } from "../../../modules/vehicule";
import { VehiculeService } from "../vehicule.service";

@Component({
  selector: 'app-vehicule-details',
  templateUrl: './vehicule-details.component.html',
  styleUrls: ['./vehicule-details.component.css']
})
export class VehiculeDetailsComponent implements OnInit {

  @Input()  vehicule: Vehicule

  constructor(
    private vehiculeService : VehiculeService,

  ) { }

  ngOnInit() {
  }

}
