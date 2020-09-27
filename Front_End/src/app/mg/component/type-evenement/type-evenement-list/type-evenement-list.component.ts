import { Component, OnInit } from '@angular/core';

import { TypeEvenement } from "../../../modules/typeEvenement";
import { TypeEvenementService } from "../type-evenement.service";

declare var $ :any;

@Component({
  selector: 'app-type-evenement-list',
  templateUrl: './type-evenement-list.component.html',
  styleUrls: ['./type-evenement-list.component.css']
})
export class TypeEvenementListComponent implements OnInit {

  componentName : string = "Type d'Evenement"

  typeEvenements : TypeEvenement[];
  selectedTypeEvenement : TypeEvenement;

  deleteConfirmation : string = ""

  constructor(
    private typeEvenementService : TypeEvenementService,
  ) {

  }

  ngOnInit() {

    // Get data
    this.loadData()

  }

  loadData(){

    this.typeEvenementService.getTypeEvenements().subscribe(
      data => {

        this.typeEvenements = data
        //this.initClient
      },
      error => {
        console.log("error")
      },
      () => { console.log('TypeEvenement Data loading ... Done')}
    );
  }

  deleteClient(){

    if (this.deleteConfirmation.toUpperCase() == 'YES') {

      let id = this.selectedTypeEvenement.id;

      this.typeEvenementService.deleteTypeEvenement(id).subscribe(data => {

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
