import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { File as MyFile } from "../../../../modules/file";

import { Mandataire } from "../../../../modules/Mandataire";
import { PersonneService } from "../../../Personnel/services/personne.service";

import { Pesage } from "../../../../modules/pesage";
import { Reglement } from "../../../../modules/reglement";
import { ReglementService } from "../reglement.service";

declare var $ :any;
@Component({
  selector: 'app-reglement-validation',
  templateUrl: './reglement-validation.component.html',
  styleUrls: ['./reglement-validation.component.css']
})
export class ReglementValidationComponent implements OnInit {

  componentName : string = "Reglements"

  selectedPesage : Pesage = null
  reglementID : number = null

  mandataires : Mandataire[] = null

  reglementForm :  FormGroup

  deleteConfirmation : string = ""

  files : MyFile[];
  selectedFile : MyFile
  selectedFiles: FileList
  currentFileUpload: File



  constructor(
    private reglementService : ReglementService,
    private personneService : PersonneService,
    private form: FormBuilder,

  ) {

    this.reglementForm = form.group({

      mandataire: ['', Validators.compose([Validators.required])],
      observation: "",

    })

   }

  ngOnInit() {

    this.loadData()

    $('.mySelect').select2();
    $('.mySelect').on(
        'change',
        (e) => {

          const controlName = $(e.target).data("select")
          const controlValue = $(e.target).val()

          this.reglementForm.controls[controlName].setValue(controlValue)


        }
    );
  }

  fileLoad(){

    if (!!this.selectedPesage) {

      this.reglementService.getAllFileByReglement(this.reglementID).subscribe(
        data => {

          this.files = data

        },
        error => {
          console.log("error")
        },
        () => { console.log('files reglement Data loading ... Done')}
      );

    }
  }

  searchPesage(){



    if (isNaN(this.reglementID)) {

      this.reglementID = this.selectedPesage = null
      return
    }

    this.reglementService.getPesageByReglement(this.reglementID).subscribe(
      data => {

        if (data) {

        this.selectedPesage = data

        this.reglementForm.controls.mandataire.setValue(this.selectedPesage.recu.reglement.mandataire || this.mandataires[0].idPers)
        this.reglementForm.controls.observation.setValue(this.selectedPesage.recu.reglement.observation)
        $('[data-select=mandataire]').val(this.reglementForm.controls.mandataire.value).trigger('change');


        this.fileLoad()

      }

      },
      error => {
        console.log("error")
        this.selectedPesage = null
      },
      () => { console.log('Pesage Data loading ... Done')}
    );
  }

  loadData(){

    // mandataires
    this.personneService.getMandataires().subscribe(
      data => {

        this.mandataires = data

      },
      error => {
        console.log("error")
      },
      () => { console.log('mandataires Data loading ... Done')}
    );
  }

  valideReglement(){

    let reglement = new Reglement()
    reglement = this.selectedPesage.recu.reglement

    reglement.mandataire = this.reglementForm.controls.mandataire.value
    reglement.observation = this.reglementForm.controls.observation.value

    reglement.dateReglement = new Date()

    this.reglementService.updateReglement(reglement).subscribe(
      data => {

        this.searchPesage()
        $('.modal').modal('hide');

      },
      error => {
        console.log("error")
      },
      () => { console.log('reglement validation ... Done')}
    );

  }

  selectFile(event) {

    this.selectedFiles = event.target.files;
  }

  uploadFile() {

    this.currentFileUpload = this.selectedFiles.item(0);

    this.reglementService.addFile(this.reglementID, this.currentFileUpload).subscribe(
      data => {

        this.searchPesage()

        $('.modal').modal('hide');

    });

    this.selectedFiles = null;
  }

  deleteFile(){

    if (this.deleteConfirmation.toUpperCase() == 'YES') {

      let id = this.selectedFile.id;

      this.reglementService.deleteFilet(id).subscribe(data => {

        $('.modal').modal('hide');

          this.searchPesage()
        },
        error => {
          console.log("error");
        },
        () => {}
      );

    }

  }
}
