import { Component, OnInit } from '@angular/core';

import { Emballage } from "../../../modules/emballage";
import { EmballageService } from "../emballage.service";

declare var $ :any;

@Component({
  selector: 'app-emballage-list',
  templateUrl: './emballage-list.component.html',
  styleUrls: ['./emballage-list.component.css']
})
export class EmballageListComponent implements OnInit {

  componentName : string = "Emballage"

  emballages : Emballage[];
  selectedEmballage : Emballage;

  deleteConfirmation : string = ""
  
  constructor(
    private emballageService : EmballageService,
  ) {

  }

  ngOnInit() {

    // Get data
    this.loadData()

  }

  loadData(){

    this.emballageService.getEmballages().subscribe(
      data => {

        this.emballages = data
        //this.initClient
      },
      error => {
        console.log("error")
      },
      () => { console.log('Emballage Data loading ... Done')}
    );
  }

  deleteClient(){

    if (this.deleteConfirmation.toUpperCase() == 'YES') {

      let id = this.selectedEmballage.id;

      this.emballageService.deleteEmballage(id).subscribe(data => {

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
