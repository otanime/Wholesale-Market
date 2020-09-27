import { Component, OnInit } from '@angular/core';
import { CategorieService } from '../services/categorie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CategorieProduit } from 'src/app/mg/modules/CategorieProduit';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-categorieproduit-form',
  templateUrl: './categorieproduit-form.component.html',
  styleUrls: ['./categorieproduit-form.component.css']
})
export class CategorieproduitFormComponent implements OnInit {
 categorie : CategorieProduit
  constructor( private cservice : CategorieService,private router :Router,private route :ActivatedRoute) { }

  ngOnInit() {
    this.categorie = new CategorieProduit();


  }

  onSubmit(produitModelForm:NgForm){
    this.cservice.createCategorieProduit(this.categorie).subscribe(data => {
      console.log(data); 

    });
  this.router.navigate(['/produits/add/-1']);


  }
}
