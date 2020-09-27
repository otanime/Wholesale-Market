import { Component, OnInit } from '@angular/core';

import { TypeVehicule } from "../../../modules/typeVehicule";
import { TypeVehiculeService } from "../type-vehicule.service";

declare var $ :any;

@Component({
  selector: 'app-type-vehicule-list',
  templateUrl: './type-vehicule-list.component.html',
  styleUrls: ['./type-vehicule-list.component.css']
})
export class TypeVehiculeListComponent implements OnInit {

  componentName : string = "Type de Vehicule"

  typeVehicules : TypeVehicule[];
  selectedTypeVehicule : TypeVehicule;

  deleteConfirmation : string = ""

  constructor(
    private typeVehiculeService : TypeVehiculeService,
  ) {

  }

  ngOnInit() {

    // Get data
    this.loadData()

  }

  loadData(){

    this.typeVehiculeService.getTypeVehicules().subscribe(
      data => {

        this.typeVehicules = data
        //this.initClient
      },
      error => {
        console.log("error")
      },
      () => { console.log('TypeVehicule Data loading ... Done')}
    );
  }

  deleteClient(){

    if (this.deleteConfirmation.toUpperCase() == 'YES') {

      let id = this.selectedTypeVehicule.id;

      this.typeVehiculeService.deleteTypeVehicule(id).subscribe(data => {

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
