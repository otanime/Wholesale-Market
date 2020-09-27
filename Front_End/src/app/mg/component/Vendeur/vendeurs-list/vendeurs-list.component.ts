import { Component, OnInit } from '@angular/core';
import { VendeurService } from '../services/vendeur.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendeurs-list',
  templateUrl: './vendeurs-list.component.html',
  styleUrls: ['./vendeurs-list.component.css']
})
export class VendeursListComponent implements OnInit {
vendeurs;
message;
  constructor(private  vendeurservice : VendeurService,private route :Router ) { }
  ngOnInit(): void {
    this.retrieveClints();
  }
  retrieveClints() {
    this.vendeurservice.getVendeurs()
      .subscribe(
        data => {
          this.vendeurs = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });  
  }
  deletevendeur(id){
    console.log(`delete vendeur ${id}`);
    this.vendeurservice.deleteVendeur(id).subscribe(
      response=> {console.log(response);
        this.message=`Delete of vendeur ${id} Successful !`;
        this.retrieveClints();
  });
 
}
viewvendeur(id){
  this.route.navigate(['../vendeurs/view',id])
}

updatevendeur(id){
  this.route.navigate(['../vendeurs/add',id])
}

}
