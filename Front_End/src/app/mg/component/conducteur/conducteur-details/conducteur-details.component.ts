import { Component, OnInit, ViewEncapsulation, EventEmitter, Input, Output } from '@angular/core';

import { Conducteur } from "../../../modules/conducteur";
import { ConducteurService } from "../conducteur.service";

declare var $ :any;
declare var toastr:any;

@Component({
  selector: 'app-conducteur-details',
  templateUrl: './conducteur-details.component.html',
  styleUrls: ['./conducteur-details.component.css']
})
export class ConducteurDetailsComponent implements OnInit {

  @Input()  conducteur: Conducteur

  constructor(
    private conducteurService : ConducteurService,
  ) { }

  ngOnInit() {

  }


}
