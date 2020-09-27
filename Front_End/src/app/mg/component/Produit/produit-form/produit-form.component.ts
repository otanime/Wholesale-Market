import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { ProduitService } from '../services/produit.service';
import { CategorieService } from '../services/categorie.service';
import { Produit } from 'src/app/mg/modules/Produit';
import { CategorieProduit } from 'src/app/mg/modules/CategorieProduit';
import { SousTypeProduit } from 'src/app/mg/modules/SousTypeProduit';
import { TypeProduit } from 'src/app/mg/modules/TypeProduit';
import { NgForm, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { TypeproduitService } from '../services/typeproduit.service';

@Component({
  selector: 'app-produit-form',
  templateUrl: './produit-form.component.html',
  styleUrls: ['./produit-form.component.css']
})
export class ProduitFormComponent implements OnInit {
produit  : Produit
categories : CategorieProduit[]
categorie : CategorieProduit
soustypes
typeproduit : TypeProduit
id 
produitForm :  FormGroup
mySubscription: any;
  constructor( private form: FormBuilder,private typeservice : TypeproduitService,private gservice : CategorieService,private pservice : ProduitService ,private router :Router,private route :ActivatedRoute) { 
   
    this.produitForm = form.group({
      libelle: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      description: [''],
      typeproduit: ['', Validators.required],
      soustype: ['', Validators.required],
      categorie: ['', Validators.required],

    });  
    
    
    this.produit = new  Produit();
    this.categorie = new CategorieProduit();
    this.typeproduit = new TypeProduit();
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    this.mySubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Trick the Router into believing it's last link wasn't previously loaded
        this.router.navigated = false;
      }
    });





  }


  ngOnInit() {
    console.log(this.route.snapshot.params['id'])
    this.id =this.route.snapshot.params['id']

    this.produit.sousTypeProduit = new SousTypeProduit();
    this.produit.sousTypeProduit.typeProduit = new TypeProduit();
    this.produit.sousTypeProduit.typeProduit.categorie = new CategorieProduit()
    this.gservice.getCategories().subscribe(
      data=> this.categories= data
    )
    
  }

  onSubmit(produitModelForm:NgForm) {
    console.log(produitModelForm.form, produitModelForm.value);
    
      this.pservice.createProduit(this.produit)
        .subscribe(data => {
          console.log(data);

        });
      this.router.navigate(['/produits/list']);


  }
  getValuee(){
    this.gservice.getcategorie(this.produit.sousTypeProduit.typeProduit.categorie.idProductCategory).subscribe(
      data=> {this.categorie= data
      console.log(data);}
    )

  }
  getsoustypes(){
    console.log("the selected value is " + this.produit.sousTypeProduit.typeProduit.libtypeProduit);
    this.typeservice.getType(this.produit.sousTypeProduit.typeProduit.idtypeProduit).subscribe(data =>
      {this.typeproduit= data
        console.log(data);}
      )
  }

  
}
