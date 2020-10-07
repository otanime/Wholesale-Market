import { Component, OnInit } from '@angular/core';
import { Hangar } from 'src/app/mg/modules/Hangar';
import { CategorieService } from '../../Produit/services/categorie.service';
import { HangarService } from '../services/hangar.service';
declare var $: any;
@Component({
  selector: 'app-hangar-list',
  templateUrl: './hangar-list.component.html',
  styleUrls: ['./hangar-list.component.css']
})
export class HangarListComponent implements OnInit {


  componentName: string = "Hangar"

  hangars: any;
  selectedHangar: Hangar;

  deleteConfirmation: string = ""

  constructor(
    private HangarService: HangarService, private categorieService: CategorieService
  ) {

  }

  ngOnInit() {

    // Get data
    this.loadData()

  }

  loadData() {

    this.HangarService.getHangars().subscribe(
      data => {

        this.hangars = data
        this.hangars.forEach(element => {
          console.log(element.categorieProduit)
          this.categorieService.getcategorie(element.categorieProduit).subscribe(
            data => {
              console.log(data)
              element.categorieProduit = data
    
            }
          )
    
        });
        //this.initClient
      },
      error => {
        console.log("error")
      },
      () => { console.log('Hangar Data loading ... Done') }
    );
    
  }

  deleteClient() {

    if (this.deleteConfirmation.toUpperCase() == 'YES') {

      let id = this.selectedHangar.numHangar;

      this.HangarService.deleteHangar(id).subscribe(data => {

        this.loadData();

        $('.modal').modal('hide');

      },
        error => {
          console.log("error");
        },
        () => { }
      );

    }

  }
}
