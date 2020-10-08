import { Component, OnInit, ViewEncapsulation, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { formatDate } from '@angular/common';

import { PesageService } from "../pesage.service";
import { Pesage } from "../../../../modules/pesage";

import { Conducteur } from "../../../../modules/conducteur";
import { ConducteurService } from "../../../conducteur/conducteur.service";

import { Vendeur } from "../../../../modules/Vendeur";
import { VendeurService } from "../../../Vendeur/services/vendeur.service";

import { AgentBalance } from "../../../../modules/AgentBalance";
import { PersonneService } from "../../../Personnel/services/personne.service";

import { Vehicule } from "../../../../modules/vehicule";
import { VehiculeService } from "../../../vehicule/vehicule.service";

import { Produit } from "../../../../modules/Produit";
import { TypeProduit } from "../../../../modules/TypeProduit";
import { SousTypeProduit } from "../../../../modules/SousTypeProduit";
// import { TypeproduitService } from "../../../Produit/services/typeproduit.service";
import { ProduitService } from "../../../Produit/services/produit.service";

import { Emballage } from "../../../../modules/emballage";
import { EmballageService } from "../../../emballage/emballage.service";

import { Tarif } from "../../../../modules/Tarification";
import { TarifService } from "../../../tarification/services/tarif.service";

declare var $ :any;

@Component({
  selector: 'app-add-pesage',
  templateUrl: './add-pesage.component.html',
  styleUrls: ['./add-pesage.component.css']
})
export class AddPesageComponent implements OnInit {

  @Output() isClosed = new EventEmitter<boolean>();


  pesageForm :  FormGroup

  conducteurs : Conducteur[]
  selectedConducteur : Conducteur

  vendeurs : Vendeur[]
  selectedVendeur : Vendeur

  vehicules : Vehicule[]
  selectedVehicule : Vehicule

  agentBalances : AgentBalance[]
  selectedAgentBalance : AgentBalance

  produits : Produit[]
  selectedProduit : Produit

  // typeproduits : TypeProduit[]
  selectedTypeproduit : TypeProduit
  selectedSousTypeProduit : SousTypeProduit

  emballages : Emballage[]
  selectedEmballage : Emballage

  tarif : Tarif


  hangars : []


  poidsBrut : number


  constructor(
    private pesageService : PesageService,
    private conducteurService : ConducteurService,
    private vendeurService : VendeurService,
    private vehiculeService : VehiculeService,
    private personneService : PersonneService,
    private produitService : ProduitService,
    // private typeproduitService : TypeproduitService,
    private emballageService : EmballageService,
    private tarifService : TarifService,
    private form: FormBuilder,

  ) {

    this.pesageForm = form.group({


      agentBallance: ['', Validators.compose([Validators.required])],

      vehiculeMatricule: ['', Validators.compose([Validators.required])],
      conducteurCin: ['', Validators.compose([Validators.required])],
      vendeurCin: ['', Validators.compose([Validators.required])],

      typeProduit: ['', Validators.compose([Validators.required])],
      sousTypeProduit: [],

      hangar: ['', Validators.compose([Validators.required])],
      provenance: [],

      emballage: ['', Validators.compose([Validators.required])],
      nombreUnite: ['', Validators.compose([Validators.required])],
      poidsEmballage: ['', Validators.compose([Validators.required])],

      poidsTotal: ['', Validators.compose([Validators.required])],
      poidsNet: ['', Validators.compose([Validators.required])],

      poidVideVehicule: ['', Validators.compose([Validators.required])],
      prixReference: ['', Validators.compose([Validators.required])],
      montantTotal: ['', Validators.compose([Validators.required])],
      taxe: ['', Validators.compose([Validators.required])],
      taxePayer: ['', Validators.compose([Validators.required])],


    });

    this.pesageForm.controls.hangar.setValue(0)


  }


  ngOnInit() {

    this.loadData()

    $('.mySelect').select2();
    $('.mySelect').on(
        'change',
        (e) => {

          const controlName = $(e.target).data("select")
          const controlValue = $(e.target).val()


          // console.log(this.pesageForm.controls[controlName].value)

          if (controlName == "produit") {

            this.onSelectProduit(controlValue)

            return
          }

          this.pesageForm.controls[controlName].setValue(controlValue)

          if (controlName == "vehiculeMatricule") {

            this.onSelectVehicule(controlValue)
          }

          if (controlName == "emballage") {

            this.onSelectEmballage(controlValue)
          }


      }


    );
  }

  loadData(){

    // conducteur
    this.conducteurService.getConducteurs().subscribe(
      data => {

        this.conducteurs = data
        this.pesageForm.controls.conducteurCin.setValue(this.conducteurs[0].cin)

      },
      error => {
        console.log("error")
      },
      () => { console.log('Conducteur Data loading ... Done')}
    );

    // vendeur
    this.vendeurService.getVendeurs().subscribe(
      data => {

        this.vendeurs = data
        this.pesageForm.controls.vendeurCin.setValue(this.vendeurs[0].cin)

      },
      error => {
        console.log("error")
      },
      () => { console.log('vendeur Data loading ... Done')}
    );

    // vehicule
    this.vehiculeService.getVehicules().subscribe(
      data => {

        this.vehicules = data
        this.onSelectVehicule(this.vehicules[0].matricule)


      },
      error => {
        console.log("error")
      },
      () => { console.log('vehicules Data loading ... Done')}
    );

    // agentBalance
    this.personneService.getAgentsBalance().subscribe(
      data => {

        this.agentBalances = data
        this.pesageForm.controls.agentBallance.setValue(this.agentBalances[0].matrecule)

      },
      error => {
        console.log("error")
      },
      () => { console.log('agentBalances Data loading ... Done')}
    );

    // produit
    this.produitService.getProducts().subscribe(
      data => {

        this.produits = data
        this.onSelectProduit(this.produits[0].idProduit)
      },
      error => {
        console.log("error")
      },
      () => { console.log('produits Data loading ... Done')}
    );

    // emballage
    this.emballageService.getEmballages().subscribe(
      data => {

        this.emballages = data
        this.onSelectEmballage(this.emballages[0].id)
      },
      error => {
        console.log("error")
      },
      () => { console.log('emballages Data loading ... Done')}
    );

  }

  getMontantTotal(){

    const montantTotal = this.pesageForm.controls.poidsNet.value * this.pesageForm.controls.prixReference.value
    this.pesageForm.controls.montantTotal.setValue(montantTotal)
  }

  getProduitTarif(produitID){

    this.tarifService.getCurrentProductTarif(produitID).subscribe(
      data => {

        if (data) {

          this.tarif = data
          this.pesageForm.controls.prixReference.setValue(this.tarif.prix)

          this.getMontantTotal()
        }


      },
      error => {
        console.log("error")
      },
      () => { console.log('tarif Data loading ... Done')}
    );

  }

  onSelectProduit(produitID : number){

    this.selectedProduit = this.produits.find(x => x.idProduit == produitID)
    this.getProduitTarif(produitID)

    this.pesageForm.controls.typeProduit.setValue(this.selectedProduit.sousTypeProduit.typeProduit.idtypeProduit)
    this.pesageForm.controls.sousTypeProduit.setValue(this.selectedProduit.sousTypeProduit.idSousType)


  }

  onSelectVehicule(vehiculeMatricule){

    this.selectedVehicule = this.vehicules.find(x => x.matricule == vehiculeMatricule)
    this.pesageForm.controls.poidVideVehicule.setValue(this.selectedVehicule.poidsVide)
    this.pesageForm.controls.vehiculeMatricule.setValue(vehiculeMatricule)


  }

  onSelectEmballage(emballageID){

    this.selectedEmballage = this.emballages.find(x => x.id == emballageID)
    this.onChangePoidsTotal(this.pesageForm.controls.poidsTotal.value)
    this.pesageForm.controls.emballage.setValue(this.selectedEmballage.id)


  }

  onChangePoidsVide(){

    this.onChangePoidsTotal(this.pesageForm.controls.poidsTotal.value)
  }

  onChangePoidsTotal(poidsTotal){

    if (this.selectedVehicule) {
      const poidVide = this.pesageForm.controls.poidVideVehicule.value


      if (poidsTotal < poidVide) {

        this.pesageForm.controls.poidsTotal.setValue(poidVide + 1)

      }

      // poids brut
      this.poidsBrut = this.pesageForm.controls.poidsTotal.value - poidVide

      // NB Unite d'emballage
      const nombreUnite = Math.trunc(this.poidsBrut / this.selectedEmballage.poidsMoyenEmbarque)
      // const nombreUnite = this.poidsBrut / this.selectedEmballage.poidsMoyenEmbarque
      this.pesageForm.controls.nombreUnite.setValue(nombreUnite)

      // poids Net
      const poidsEmballage = this.selectedEmballage.poidsMoyen * nombreUnite
      const poidsNet = this.poidsBrut - poidsEmballage

      this.pesageForm.controls.poidsEmballage.setValue(poidsEmballage)
      this.pesageForm.controls.poidsNet.setValue(poidsNet)

      this.getMontantTotal()
      this.onChangeTaxe(this.pesageForm.controls.taxe.value)

    }

  }

  onChangeTaxe(taxe){

    if (taxe < 0 || taxe > 100 || taxe == "") {

      this.pesageForm.controls.taxe.setValue(0)
    }

    const taxePayer = (this.pesageForm.controls.montantTotal.value * taxe ) / 100
    this.pesageForm.controls.taxePayer.setValue(taxePayer)

  }

  addPesage(){

    const formValues = this.pesageForm.value;

    console.log(formValues);


    // let pesage = new Pesage();
    //
    // pesage = formValues
    //
    // pesage.dateDeclaration = new Date()
    //
    // this.pesageService.addPesage(pesage).subscribe(
    //   data => {
    //
    //     this.pesageForm.reset();
    //
    //     this.isClosed.emit(true);
    //
    //     $('.modal').modal('hide');
    //
    //     // toastr.success('Bien Ajouter', '', {
    //     //   "positionClass": "toast-bottom-right",
    //     //   "showDuration": "500",
    //     // });
    //
    //
    //   },
    //   error => {
    //     console.log("error");
    //   },
    //   () => { console.log('loading Done')}
    // );


  }
}
