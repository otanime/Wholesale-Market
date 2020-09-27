import { Component, OnInit, ViewEncapsulation, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { TypeEmballage } from "../../../modules/typeEmballage";
import { SousTypeEmballage } from "../../../modules/sousTypeEmballage";
import { SousTypeEmballageService } from "../sous-type-emballage.service";

declare var $ :any;

@Component({
  selector: 'app-add-sous-type-emballage',
  templateUrl: './add-sous-type-emballage.component.html',
  styleUrls: ['./add-sous-type-emballage.component.css']
})
export class AddSousTypeEmballageComponent implements OnInit {

  @Input() typeEmballage : TypeEmballage
  @Output() isClosed = new EventEmitter<boolean>();


  selectedSousTypeEmballage : SousTypeEmballage
  sousTypeEmballageForm :  FormGroup

  constructor(
    private sousTypeEmballageService : SousTypeEmballageService,
    private form: FormBuilder,
  ) {


    this.sousTypeEmballageForm = form.group({

      libelle: ["", Validators.compose([Validators.required, Validators.minLength(5)])],

    });

  }

  ngOnInit() {

  }


  addSousTypeEmballage(){

    const formValues = this.sousTypeEmballageForm.value;

    let sousTypeEmballage = new SousTypeEmballage();

    sousTypeEmballage = formValues

    sousTypeEmballage.typeEmballage = this.typeEmballage

    this.sousTypeEmballageService.addSousTypeEmballage(sousTypeEmballage).subscribe(
      data => {

        this.sousTypeEmballageForm.reset();

        this.isClosed.emit(true);

        $('.modal').modal('hide');

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
}
