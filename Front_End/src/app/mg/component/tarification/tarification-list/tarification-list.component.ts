import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LigneID } from 'src/app/mg/modules/LigneTarifPk';
import { TarifService } from '../services/tarif.service';

@Component({
  selector: 'app-tarification-list',
  templateUrl: './tarification-list.component.html',
  styleUrls: ['./tarification-list.component.css']
})
export class TarificationListComponent implements OnInit {
tarifs;
message;
  constructor(private  tarifeservice : TarifService,private route :Router ) { }
 
  ngOnInit(): void {
    this.retrieveTarifs();
  }

  retrieveTarifs() {
    this.tarifeservice.getTarifs()
      .subscribe(
        data => {
          this.tarifs = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });  
  }
  viewtarif( id :LigneID){
    
  }

}
