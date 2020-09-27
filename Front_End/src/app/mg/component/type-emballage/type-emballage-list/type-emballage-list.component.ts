import { Component, OnInit } from '@angular/core';

import { TypeEmballage } from "../../../modules/typeEmballage";
import { TypeEmballageService } from "../type-emballage.service";

declare var $ :any;

@Component({
  selector: 'app-type-emballage-list',
  templateUrl: './type-emballage-list.component.html',
  styleUrls: ['./type-emballage-list.component.css']
})
export class TypeEmballageListComponent implements OnInit {

  componentName : string = "Type d'Emballage"

  typeEmballages : TypeEmballage[];
  selectedTypeEmballage : TypeEmballage;

  deleteConfirmation : string = ""

  constructor(
    private typeEmballageService : TypeEmballageService,
  ) {

  }

  ngOnInit() {

    // Get data
    this.loadData()

  }

  loadData(){

    this.typeEmballageService.getTypeEmballages().subscribe(
      data => {

        this.typeEmballages = data
      },
      error => {
        console.log("error")
      },
      () => { console.log('TypeEmballage Data loading ... Done')}
    );
  }

  deleteTypeEmballage(){

    if (this.deleteConfirmation.toUpperCase() == 'YES') {

      let id = this.selectedTypeEmballage.id;

      this.typeEmballageService.deleteTypeEmballage(id).subscribe(data => {

          this.loadData();

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
