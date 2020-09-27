import { Component, OnInit, ViewEncapsulation, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { TypeEmballage } from "../../../modules/typeEmballage";
import { TypeEmballageService } from "../type-emballage.service";

declare var $ :any;

@Component({
  selector: 'app-update-type-emballage',
  templateUrl: './update-type-emballage.component.html',
  styleUrls: ['./update-type-emballage.component.css']
})
export class UpdateTypeEmballageComponent implements OnInit {

  @Input()  typeEmballage: TypeEmballage

  @Output() isClosed = new EventEmitter<boolean>();

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

  ngOnChanges(){

    this.typeEmballageForm.reset()

    this.typeEmballageForm.setValue({

      libelle : this.typeEmballage.libelle
    })

  }


  updateTypeEmballage(){

    const formValues = this.typeEmballageForm.value;

    let typeEmballage = new TypeEmballage();

    typeEmballage = formValues

    typeEmballage.id = this.typeEmballage.id

    this.typeEmballageService.updateTypeEmballage(typeEmballage).subscribe(
        data => {

            this.typeEmballageForm.reset();

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
