import { Component, OnInit, ViewEncapsulation, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { SousTypeEmballage } from "../../../modules/sousTypeEmballage";
import { SousTypeEmballageService } from "../sous-type-emballage.service";

declare var $ :any;
declare var toastr:any;

@Component({
  selector: 'app-update-sous-type-emballage',
  templateUrl: './update-sous-type-emballage.component.html',
  styleUrls: ['./update-sous-type-emballage.component.css']
})
export class UpdateSousTypeEmballageComponent implements OnInit {

  @Input()  sousTypeEmballage: SousTypeEmballage

  @Output() isClosed = new EventEmitter<boolean>();

  sousTypeEmballageForm :  FormGroup

  constructor(
    private sousTypeEmballageService : SousTypeEmballageService,
    private form: FormBuilder,
  ) {

    this.sousTypeEmballageForm = form.group({

      libelle: ['', Validators.compose([Validators.required, Validators.minLength(3)])],

    });
  }

  ngOnInit() {

  }

  ngOnChanges(){

    this.sousTypeEmballageForm.reset()

    this.sousTypeEmballageForm.setValue({

      libelle : this.sousTypeEmballage.libelle
    })


  }



  updateSousTypeEmballage(sousTypeEmballage : SousTypeEmballage){

    const formValues = this.sousTypeEmballageForm.value;

    let stm= new SousTypeEmballage();

    stm = formValues;

    stm.id = this.sousTypeEmballage.id;

    this.sousTypeEmballageService.updateSousTypeEmballage(stm).subscribe(
        data => {

            this.sousTypeEmballageForm.reset();

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

}
