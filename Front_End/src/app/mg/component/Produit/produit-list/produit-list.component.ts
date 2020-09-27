import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../services/produit.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produit-list',
  templateUrl: './produit-list.component.html',
  styleUrls: ['./produit-list.component.css']
})
export class ProduitListComponent implements OnInit {
  produits;
  message;
    constructor(private  produitservice : ProduitService,private route :Router ) { }
    ngOnInit(): void {
      this.retrieveproduits();
    }
    retrieveproduits() {
      this.produitservice.getProducts()
        .subscribe(
          data => {
            this.produits = data;
            console.log(data);
          },
          error => {
            console.log(error);
          });  
    }
    deleteproduit(id){
      console.log(`delete produit ${id}`);
      this.produitservice.deleteProduit(id).subscribe(
        response=> {console.log(response);
          this.message=`Delete of produit ${id} Successful !`;
          this.retrieveproduits();
    });
   
  }
  viewproduit(id){
    this.route.navigate(['../produits/view',id])
  }
  
  updateproduit(id){
    this.route.navigate(['../produits/add',id])
  }
  

}
