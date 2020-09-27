import { Component, OnInit } from '@angular/core';

import { Conducteur } from "../../../modules/conducteur";
import { ConducteurService } from "../conducteur.service";

declare var $ :any;

@Component({
  selector: 'app-conducteur-list',
  templateUrl: './conducteur-list.component.html',
  styleUrls: ['./conducteur-list.component.css']
})
export class ConducteurListComponent implements OnInit {

  componentName : string = "Conducteur"

  conducteurs : Conducteur[];
  selectedConducteur : Conducteur;

  deleteConfirmation : string = ""

  constructor(
    private conducteurService : ConducteurService,
  ) {

  }

  ngOnInit() {

    // Get data
    this.loadData()

  }

  loadData(){

    this.conducteurService.getConducteurs().subscribe(
      data => {

        this.conducteurs = data
        //this.initClient
      },
      error => {
        console.log("error")
      },
      () => { console.log('Conducteur Data loading ... Done')}
    );
  }

  deleteClient(){

    if (this.deleteConfirmation.toUpperCase() == 'YES') {

      let id = this.selectedConducteur.id;

      this.conducteurService.deleteConducteur(id).subscribe(data => {

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
