import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategorieProduit } from 'src/app/mg/modules/CategorieProduit';
import { FileDB } from 'src/app/mg/modules/FileDB';
import { LigneTarification } from 'src/app/mg/modules/LigneTarification';
import { Personne } from 'src/app/mg/modules/personne';
import { Produit } from 'src/app/mg/modules/Produit';
import { SousTypeProduit } from 'src/app/mg/modules/SousTypeProduit';
import { Tarif } from 'src/app/mg/modules/Tarification';
import { TypeProduit } from 'src/app/mg/modules/TypeProduit';
import { PersonneService } from '../../Personnel/services/personne.service';
import { ProduitService } from '../../Produit/services/produit.service';
import { TarifService } from '../services/tarif.service';

@Component({
  selector: 'app-tarification-detail',
  templateUrl: './tarification-detail.component.html',
  styleUrls: ['./tarification-detail.component.css']
})
export class TarificationDetailComponent implements OnInit {
  personne
  produit: Produit
  lg: LigneTarification
  idProduit: number
  idPersone: number
  idTarif: number
  files: FileDB[]
  constructor(private tp: PersonneService, private ts: TarifService, private ps: ProduitService, private router: Router, private route: ActivatedRoute) {
    this.personne = new Personne();
    this.produit = new Produit();
    this.produit.sousTypeProduit = new SousTypeProduit;
    this.produit.sousTypeProduit.typeProduit = new TypeProduit();
    this.produit.sousTypeProduit.typeProduit.categorie = new CategorieProduit();
    this.lg = new LigneTarification();
    this.lg.tarif = new Tarif();

  }

  ngOnInit() {

    this.route.queryParams.subscribe((p: any) => {
      if (p.param1) {
        this.idProduit = Number.parseInt(JSON.parse(p.param1))
      }
      if (p.param2) {
        this.idTarif = Number.parseInt(JSON.parse(p.param2));
      }

    });
    console.log("product :" + this.idProduit)
    console.log("tarif : " + this.idTarif)
    this.ts.getTarifBLigneId(this.idProduit, this.idTarif).subscribe(
      data => {
        this.lg = data


        this.tp.getPersonne(this.lg.idAgentCommission).subscribe
          (
            data => {
              this.personne = data
            }
          )

        this.ps.getproduct(this.lg.ligneID.idProduit).subscribe
          (
            data => {
              this.produit = data
            }
          )

      });






  }

  ajouterTarif() {
    this.router.navigate(['/tarifs/add/-1']);


  }


}
