import { Component, OnInit } from '@angular/core';
import { Vendeur } from 'src/app/mg/modules/Vendeur';
import { ActivatedRoute, Router } from '@angular/router';
import { VendeurService } from '../services/vendeur.service';

@Component({
  selector: 'app-vendeur-view',
  templateUrl: './vendeur-view.component.html',
  styleUrls: ['./vendeur-view.component.css']
})
export class VendeurViewComponent implements OnInit {
vendeur : Vendeur
id ;

  constructor(private vs : VendeurService,private router :Router,private route :ActivatedRoute ,) { }
  

  ngOnInit() {
    console.log(this.route.snapshot.params['id'])
    this.id =this.route.snapshot.params['id']
    this.vendeur = new Vendeur();
    if(this.id != -1){
      this.vs.getVendeur(this.id).subscribe(
        data => this.vendeur=data
      );
    }
  }
  deletevendeur(id){
    console.log(`delete vendeur ${id}`);
    this.vs.deleteVendeur(id).subscribe(
      response=> {console.log(response);
        this.router.navigate(['./vendeurs/list']);
       
  });
 
}

updatevendeur(id){
  this.router.navigate(['../vendeurs/add',id])
}

}
