import { Component, OnInit } from '@angular/core';

import { Vehicule } from "../../../modules/vehicule";
import { VehiculeService } from "../vehicule.service";

declare var $ :any;

@Component({
  selector: 'app-vehicule-list',
  templateUrl: './vehicule-list.component.html',
  styleUrls: ['./vehicule-list.component.css']
})
export class VehiculeListComponent implements OnInit {

  componentName : string = "Vehicule"

  vehicules : Vehicule[];
  selectedVehicule : Vehicule;

  deleteConfirmation : string = ""

  constructor(
    private vehiculeService : VehiculeService,
  ) {

  }

  ngOnInit() {

    // Get data
    this.loadData()

  }

  loadData(){

    this.vehiculeService.getVehicules().subscribe(
      data => {

        this.vehicules = data

      },
      error => {
        console.log("error")
      },
      () => { console.log('Vehicule Data loading ... Done')}
    );
  }

  deleteClient(){

    if (this.deleteConfirmation.toUpperCase() == 'YES') {

      let id = this.selectedVehicule.id;

      this.vehiculeService.deleteVehicule(id).subscribe(data => {

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
