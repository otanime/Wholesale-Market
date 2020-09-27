import { Component, OnInit } from '@angular/core';

import { Evenement } from "../../../modules/evenement";
import { EvenementService } from "../evenement.service";

declare var $ :any;

import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';

@Component({
  selector: 'app-evenement-list',
  templateUrl: './evenement-list.component.html',
  styleUrls: ['./evenement-list.component.css']
})
export class EvenementListComponent implements OnInit {

  componentName : string = "Evenement"

  evenements : Evenement[];
  selectedEvenement : Evenement;

  deleteConfirmation : string = ""

  constructor(
    private evenementService : EvenementService,
  ) {

    $(document).ready(function() {

      // datatables
      $('#myDataTable').DataTable({
        ordering:  false,
        "bLengthChange" : false,
        "bInfo":false,
      })
      
    });

  }

  ngOnInit() {

    // Get data
    this.loadData()

  }

  loadData(){

    this.evenementService.getEvenements().subscribe(
      data => {

        this.evenements = data
        //this.initClient
      },
      error => {
        console.log("error")
      },
      () => { console.log('Evenement Data loading ... Done')}
    );
  }

  deleteEvenement(){

    if (this.deleteConfirmation.toUpperCase() == 'YES') {

      let id = this.selectedEvenement.id;

      this.evenementService.deleteEvenement(id).subscribe(data => {

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
