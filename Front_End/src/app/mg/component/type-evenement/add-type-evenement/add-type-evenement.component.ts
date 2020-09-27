import { Component, OnInit, ViewEncapsulation, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { TypeEvenement } from "../../../modules/typeEvenement";
import { TypeEvenementService } from "../type-evenement.service";

declare var $ :any;

@Component({
  selector: 'app-add-type-evenement',
  templateUrl: './add-type-evenement.component.html',
  styleUrls: ['./add-type-evenement.component.css']
})
export class AddTypeEvenementComponent implements OnInit {

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


  addTypeEvenement(){

    const formValues = this.typeEvenementForm.value;

    let typeEvenement = new TypeEvenement();

    typeEvenement = formValues

    this.typeEvenementService.addTypeEvenement(typeEvenement).subscribe(
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
