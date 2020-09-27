import { Component, OnInit } from '@angular/core';
import { SousTypeProduit } from 'src/app/mg/modules/SousTypeProduit';
import { Router, ActivatedRoute } from '@angular/router';
import { SousSousTypeProduitService } from '../services/soustypeproduit.service';
import { TypeProduit } from 'src/app/mg/modules/TypeProduit';
import { TypeproduitService } from '../services/typeproduit.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-soustypeproduit-form',
  templateUrl: './soustypeproduit-form.component.html',
  styleUrls: ['./soustypeproduit-form.component.css']
})
export class SoustypeproduitFormComponent implements OnInit {

soustype : SousTypeProduit ;
typeproduits : TypeProduit[]
  constructor(private tservice : TypeproduitService,private sservice :SousSousTypeProduitService,private router :Router,private route :ActivatedRoute) { }

  ngOnInit() {
    this.soustype = new SousTypeProduit();
    this.soustype.typeProduit = new TypeProduit();
    this.tservice.getTypes().subscribe(
data => this.typeproduits = data
    )
  }
  onSubmit(soustypeproduitModelForm:NgForm){
    this.sservice.createSousTypeProduit(this.soustype).subscribe(data => {
      console.log(data); 

    });
  this.router.navigate(['/produits/add/-1']);


  }

}
