import { Component, OnInit, ViewEncapsulation, EventEmitter, Input, Output } from '@angular/core';

import { File as MyFile } from "../../../../modules/file";

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

import { TypeProduit } from "../../../../modules/TypeProduit";
import { SousTypeProduit } from "../../../../modules/SousTypeProduit";
import { TypeproduitService } from "../../../Produit/services/typeproduit.service";

import { Emballage } from "../../../../modules/emballage";
import { EmballageService } from "../../../emballage/emballage.service";

declare var $ :any;

@Component({
  selector: 'app-pesage-details',
  templateUrl: './pesage-details.component.html',
  styleUrls: ['./pesage-details.component.css']
})
export class PesageDetailsComponent implements OnInit {

  @Input()  pesage: Pesage

  @Output() isClosed = new EventEmitter<boolean>();

  files : MyFile[];

  selectedFile : MyFile
  deleteConfirmation : string = ""

  selectedFiles: FileList

  currentFileUpload: File


  conducteurs : Conducteur[]
  selectedConducteur : Conducteur

  vendeurs : Vendeur[]
  selectedVendeur : Vendeur

  vehicules : Vehicule[]
  selectedVehicule : Vehicule

  agentBalances : AgentBalance[]
  selectedAgentBalance : AgentBalance

  typeproduits : TypeProduit[]
  selectedTypeproduit : TypeProduit
  selectedSousTypeProduit : SousTypeProduit

  emballages : Emballage[]
  selectedEmballage : Emballage

  constructor(
    private pesageService : PesageService,
    private conducteurService : ConducteurService,
    private vendeurService : VendeurService,
    private vehiculeService : VehiculeService,
    private personneService : PersonneService,
    private typeproduitService : TypeproduitService,
    private emballageService : EmballageService,
  ) {

  }

  ngOnInit() {

    this.loadData()

  }

  toLoadData(){

    this.isClosed.emit(true);

  }

  loadData(){

    // conducteur
    this.conducteurService.getConducteurs().subscribe(
      data => {

        this.conducteurs = data
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
      },
      error => {
        console.log("error")
      },
      () => { console.log('agentBalances Data loading ... Done')}
    );

    // typeproduit
    this.typeproduitService.getTypes().subscribe(
      data => {

        this.typeproduits = data
      },
      error => {
        console.log("error")
      },
      () => { console.log('typeproduit Data loading ... Done')}
    );

    // emballage
    this.emballageService.getEmballages().subscribe(
      data => {

        this.emballages = data
      },
      error => {
        console.log("error")
      },
      () => { console.log('emballages Data loading ... Done')}
    );
  }

  ngOnChanges(){

    if (!!this.pesage) {

      this.pesageService.getAllFileByPesage(this.pesage.id).subscribe(
        data => {

          this.files = data

        },
        error => {
          console.log("error")
        },
        () => { console.log('file Data loading ... Done')}
      );

      this.selectedConducteur = this.conducteurs.find(x => x.cin == this.pesage.conducteurCin)
      this.selectedVendeur = this.vendeurs.find(x => x.cin == this.pesage.vendeurCin)
      this.selectedVehicule = this.vehicules.find(x => x.matricule == this.pesage.vehiculeMatricule)
      this.selectedAgentBalance = this.agentBalances.find(x => x.matrecule == this.pesage.agentBallance)
      this.selectedTypeproduit = this.typeproduits.find(x => x.idtypeProduit == this.pesage.typeProduit)
      this.selectedSousTypeProduit = this.selectedTypeproduit.sousTypeProduits.find(x => x.idSousType == this.pesage.sousTypeProduit)
      this.selectedEmballage = this.emballages.find(x => x.id == this.pesage.emballage)





    }
  }

  selectFile(event) {

    this.selectedFiles = event.target.files;
  }

  uploadFile() {

    this.currentFileUpload = this.selectedFiles.item(0);

    this.pesageService.addFile(this.pesage.id, this.currentFileUpload).subscribe(
      data => {

        this.toLoadData();

        $('.modal').modal('hide');

    });

    this.selectedFiles = null;
  }

  deleteFile(){

    if (this.deleteConfirmation.toUpperCase() == 'YES') {

      let id = this.selectedFile.id;

      this.pesageService.deleteFilet(id).subscribe(data => {

          this.toLoadData();

          $('.modal').modal('hide');

        },
        error => {
          console.log("error");
        },
        () => {}
      );

    }

  }

}
