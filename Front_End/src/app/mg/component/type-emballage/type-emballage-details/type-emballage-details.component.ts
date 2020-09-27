import { Component, OnInit, ViewEncapsulation, EventEmitter, Input, Output } from '@angular/core';

import { TypeEmballage } from "../../../modules/typeEmballage";
import { TypeEmballageService } from "../type-emballage.service";

import { SousTypeEmballage } from "../../../modules/sousTypeEmballage";
import { SousTypeEmballageService } from "../../sous-type-emballage/sous-type-emballage.service";

declare var $ :any;


@Component({
  selector: 'app-type-emballage-details',
  templateUrl: './type-emballage-details.component.html',
  styleUrls: ['./type-emballage-details.component.css']
})
export class TypeEmballageDetailsComponent implements OnInit {

  @Input()  typeEmballage: TypeEmballage

  @Output() isClosed = new EventEmitter<boolean>();


  selectedSousEmballage : SousTypeEmballage
  deleteConfirmation : string = ""


  constructor(
    private sousTypeEmballageService : SousTypeEmballageService,
  ) { }

  ngOnInit() {
  }

  toLoadData(){

    this.isClosed.emit(true);

  }

  deleteSousTypeEmballage(){

    if (this.deleteConfirmation.toUpperCase() == 'YES') {

      let id = this.selectedSousEmballage.id;

      this.sousTypeEmballageService.deleteSousTypeEmballage(id).subscribe(data => {

          this.toLoadData();

          $('.modal').modal('hide');

        },
        error => {
          console.log("error");
        },
        () => {}
      );

    }

  }

}
