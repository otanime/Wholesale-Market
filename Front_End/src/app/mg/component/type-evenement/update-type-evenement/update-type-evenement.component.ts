import { Component, OnInit, ViewEncapsulation, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { TypeEvenement } from "../../../modules/typeEvenement";
import { TypeEvenementService } from "../type-evenement.service";

declare var $ :any;

@Component({
  selector: 'app-update-type-evenement',
  templateUrl: './update-type-evenement.component.html',
  styleUrls: ['./update-type-evenement.component.css']
})
export class UpdateTypeEvenementComponent implements OnInit {

  @Input()  typeEvenement: TypeEvenement

  @Output() isClosed = new EventEmitter<boolean>();

  selectedTypeEvenement : TypeEvenement
  typeEvenementForm :  FormGroup


  constructor(
    private typeEvenementService : TypeEvenementService,
    private form: FormBuilder,
  ) {


    this.typeEvenementForm = form.group({

      libelle: ['', Validators.compose([Validators.required, Validators.minLength(3)])],

    });

  }

  ngOnInit() {
  }

  ngOnChanges(){

    this.typeEvenementForm.reset()

    if (!!this.typeEvenement) {

      this.selectedTypeEvenement = this.typeEvenement

      this.typeEvenementForm.setValue({

        libelle : this.typeEvenement.libelle,
      })


    }

  }

  updateTypeEvenement(){

    const formValues = this.typeEvenementForm.value;

    let typeEvenement = new TypeEvenement();

    typeEvenement = formValues

    typeEvenement.id = this.typeEvenement.id


    this.typeEvenementService.updateTypeEvenement(typeEvenement).subscribe(
      data => {

        this.typeEvenementForm.reset()

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

}
