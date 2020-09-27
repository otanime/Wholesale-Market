import { Component, OnInit, ViewEncapsulation, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { Emballage } from "../../../modules/emballage";
import { EmballageService } from "../emballage.service";

import { TypeEmballage } from "../../../modules/typeEmballage";
import { SousTypeEmballage } from "../../../modules/sousTypeEmballage";
import { TypeEmballageService } from "../../type-emballage/type-emballage.service";

declare var $ :any;

@Component({
  selector: 'app-update-emballage',
  templateUrl: './update-emballage.component.html',
  styleUrls: ['./update-emballage.component.css']
})
export class UpdateEmballageComponent implements OnInit {

  @Input()  emballage: Emballage

  @Output() isClosed = new EventEmitter<boolean>();

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

  ngOnChanges(){

    this.emballageForm.reset()

    if (!!this.emballage) {

      this.selectedTypeEmballage = this.emballage.typeEmballage

      this.emballageForm.setValue({

        libelle : this.emballage.libelle,
        description : this.emballage.description,
        poidsMoyen : this.emballage.poidsMoyen,
        poidsMoyenEmbarque : this.emballage.poidsMoyenEmbarque,
        typeEmballage : this.emballage.typeEmballage.id,
        sousTypeEmballage : null,
      })

      if (!!this.emballage.sousTypeEmballage) {

        this.emballageForm.controls.sousTypeEmballage.setValue(this.emballage.sousTypeEmballage.id);

      }

    }

  }


  updateEmballage(){

    const formValues = this.emballageForm.value;

    let emballage = new Emballage();

    emballage = formValues

    emballage.id = this.emballage.id

    emballage.typeEmballage = this.selectedTypeEmballage
    emballage.sousTypeEmballage = this.selectedSousTypeEmballage

    this.emballageService.updateEmballage(emballage).subscribe(
        data => {

            this.emballageForm.reset();
            this.onResetData()

            this.isClosed.emit(true);

            console.log("bien");
            $('.modal').modal('hide');

          },
          error => {
              console.log("error");
            },
            () => {}
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
