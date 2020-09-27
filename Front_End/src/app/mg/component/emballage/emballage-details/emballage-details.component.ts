import { Component, OnInit, ViewEncapsulation, EventEmitter, Input, Output } from '@angular/core';

import { Emballage } from "../../../modules/emballage";
import { EmballageService } from "../emballage.service";

@Component({
  selector: 'app-emballage-details',
  templateUrl: './emballage-details.component.html',
  styleUrls: ['./emballage-details.component.css']
})
export class EmballageDetailsComponent implements OnInit {

  @Input()  emballage: Emballage

  constructor(
    private emballageService : EmballageService,
  ) { }

  ngOnInit() {
  }

}
