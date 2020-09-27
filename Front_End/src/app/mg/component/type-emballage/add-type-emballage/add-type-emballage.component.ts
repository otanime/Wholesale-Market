import { Component, OnInit, ViewEncapsulation, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { TypeEmballage } from "../../../modules/typeEmballage";
import { TypeEmballageService } from "../type-emballage.service";

declare var $ :any;

@Component({
  selector: 'app-add-type-emballage',
  templateUrl: './add-type-emballage.component.html',
  styleUrls: ['./add-type-emballage.component.css']
})
export class AddTypeEmballageComponent implements OnInit {

  @Output() isClosed = new EventEmitter<boolean>();


  selectedTypeEmballage : TypeEmballage
  typeEmballageForm :  FormGroup

  constructor(
    private typeEmballageService : TypeEmballageService,
    private form: FormBuilder,
  ) {


    this.typeEmballageForm = form.group({

      libelle: ["", Validators.compose([Validators.required, Validators.minLength(5)])],

    });

  }

  ngOnInit() {

  }


  addTypeEmballage(){

    const formValues = this.typeEmballageForm.value;

    let typeEmballage = new TypeEmballage();

    typeEmballage = formValues

    this.typeEmballageService.addTypeEmballage(typeEmballage).subscribe(
      data => {

        this.typeEmballageForm.reset();

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
