import { Component, OnInit, ViewEncapsulation, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { Emballage } from "../../../modules/emballage";
import { EmballageService } from "../emballage.service";

import { TypeEmballage } from "../../../modules/typeEmballage";
import { SousTypeEmballage } from "../../../modules/sousTypeEmballage";
import { TypeEmballageService } from "../../type-emballage/type-emballage.service";


declare var $ :any;

@Component({
  selector: 'app-add-emballage',
  templateUrl: './add-emballage.component.html',
  styleUrls: ['./add-emballage.component.css']
})
export class AddEmballageComponent implements OnInit {

  @Output() isClosed = new EventEmitter<boolean>();


  selectedEmballage : Emballage
  emballageForm :  FormGroup

  typeEmballages : TypeEmballage[];
  selectedTypeEmballage : TypeEmballage
  selectedSousTypeEmballage : SousTypeEmballage


  constructor(
    private emballageService : EmballageService,
    private typeEmballageService : TypeEmballageService,
    private form: FormBuilder,
  ) {


    this.emballageForm = form.group({

      libelle: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      description: ['', Validators.compose([Validators.required, Validators.minLength(12)])],
      poidsMoyen: ['', Validators.compose([Validators.required])],
      poidsMoyenEmbarque: ['', Validators.compose([Validators.required])],
      typeEmballage: ['', Validators.compose([Validators.required])],
      sousTypeEmballage: [''],

    });

  }

  ngOnInit() {

    this.loadData()
  }

  loadData(){

    this.typeEmballageService.getTypeEmballages().subscribe(
      data => {

        this.typeEmballages = data

      },
      error => {
        console.log("error")
      },
      () => { console.log('TypeEmballage Data loading ... Done')}
    );
  }

  addEmballage(){

    const formValues = this.emballageForm.value;

    let emballage = new Emballage();

    emballage = formValues

    emballage.typeEmballage = this.selectedTypeEmballage
    emballage.sousTypeEmballage = this.selectedSousTypeEmballage

    this.emballageService.addEmballage(emballage).subscribe(
      data => {

        this.emballageForm.reset()
        this.onResetData()

        this.isClosed.emit(true)
        $('.modal').modal('hide')


        // toastr.success('Bien Ajouter', '', {
        //   "positionClass": "toast-bottom-right",
        //   "showDuration": "500",
        // });


      },
      error => {
        console.log("error");
      },
      () => { console.log('loading Done')}
    );


  }

  onSelectTypeEmballage(typeEmballageID){

    this.selectedTypeEmballage = this.typeEmballages.find(x => x.id == typeEmballageID)

    this.emballageForm.controls.typeEmballage.setValue(this.selectedTypeEmballage.id);

    if (this.selectedTypeEmballage.sousTypeEmballages.length > 0){

      this.selectedSousTypeEmballage = this.selectedTypeEmballage.sousTypeEmballages[0]
      this.emballageForm.controls.sousTypeEmballage.setValue(this.selectedSousTypeEmballage.id);
    }else{

      this.emballageForm.controls.sousTypeEmballage.setValue(null);
      this.selectedSousTypeEmballage = null
    }



  }

  onSelectSousTypeEmballage(sousTypeEmballageID){

    this.selectedSousTypeEmballage = this.selectedTypeEmballage.sousTypeEmballages.find(x => x.id == sousTypeEmballageID)

  }

  onResetData(){

    this.selectedTypeEmballage = null
    this.selectedSousTypeEmballage = null
  }

}
