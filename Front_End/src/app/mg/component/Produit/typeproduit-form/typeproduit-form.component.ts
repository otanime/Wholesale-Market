import { Component, OnInit, Type } from '@angular/core';
import { TypeproduitService } from '../services/typeproduit.service';
import { CategorieService } from '../services/categorie.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CategorieProduit } from 'src/app/mg/modules/CategorieProduit';
import { TypeProduit } from 'src/app/mg/modules/TypeProduit';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-typeproduit-form',
  templateUrl: './typeproduit-form.component.html',
  styleUrls: ['./typeproduit-form.component.css']
})
export class TypeproduitFormComponent implements OnInit {
 categories : CategorieProduit[]
 typeproduit : TypeProduit
  constructor(private tservice : TypeproduitService, private gservice : CategorieService,private router :Router,private route :ActivatedRoute) { }

  ngOnInit() {
this.typeproduit = new TypeProduit();
this.typeproduit.categorie = new CategorieProduit();
this.gservice.getCategories().subscribe(
  data=> this.categories= data
)
  }
  onSubmit(typeproduitModelForm:NgForm){
    this.tservice.createTypeProduit(this.typeproduit).subscribe(data => {
      console.log(data); 

    });
  this.router.navigate(['/produits/add/-1']);

  }


}
