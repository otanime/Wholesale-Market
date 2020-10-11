import { Component, OnInit } from '@angular/core';

import { Pesage } from "../../../../modules/pesage";
import { PesageLord } from "../../../../modules/pesage";
import { PesageService } from "../pesage.service";

declare var $ :any;

import 'datatables.net';
import 'datatables.net-bs4';

@Component({
  selector: 'app-pesage-list',
  templateUrl: './pesage-list.component.html',
  styleUrls: ['./pesage-list.component.css'],
})
export class PesageListComponent implements OnInit {

  componentName : string = "Pesage"

  pesages : Pesage[] = []
  selectedPesage : Pesage
  pesageLord : PesageLord

  deleteConfirmation : string = ""


  constructor(
    private pesageService : PesageService,
  ) {

  }

  ngOnInit() {

    // Get data
    this.loadData()

  }

  dataTable(){

    $(document).ready(function() {



      if ( ! $.fn.DataTable.isDataTable('#myDataTable') ) {

        const table: any = $('#myDataTable');
        table.DataTable({
          ordering:  false,
          "bLengthChange" : false,
          "bInfo":false,
        })
      }


    });


  }

  loadData(){

    this.pesageService.getPesages().subscribe(
      data => {

        this.pesages = data

        this.dataTable()

      },
      error => {
        console.log("error")
      },
      () => { console.log('Pesage Data loading ... Done')}
    );

  }

  toPesageLord(pesageLord){

    this.pesageLord = pesageLord

  }

  deletePesage(){

    if (this.deleteConfirmation.toUpperCase() == 'YES') {

      let id = this.selectedPesage.id;
      this.pesageService.deletePesage(id).subscribe(data => {

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
