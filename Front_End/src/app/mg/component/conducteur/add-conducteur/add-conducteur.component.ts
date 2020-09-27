import { Component, OnInit, ViewEncapsulation, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { Conducteur } from "../../../modules/conducteur";
import { ConducteurService } from "../conducteur.service";

declare var $ :any;

@Component({
  selector: 'app-add-conducteur',
  templateUrl: './add-conducteur.component.html',
  styleUrls: ['./add-conducteur.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class AddConducteurComponent implements OnInit {

  @Output() isClosed = new EventEmitter<boolean>();


  selectedConducteur : Conducteur
  conducteurForm :  FormGroup

  constructor(
    private conducteurService : ConducteurService,
    private form: FormBuilder,
  ) {


    this.conducteurForm = form.group({

      cin: ["", Validators.compose([Validators.required, Validators.minLength(5), , Validators.pattern('[a-zA-Z]{1,2}[0-9]{5,6}')])],
      nom: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      prenom: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      tel: ['', Validators.compose([Validators.minLength(10), Validators.maxLength(10), Validators.pattern('0[0-9]{9}') ])],
      adresse: ['', Validators.compose([Validators.minLength(10), Validators.maxLength(125)])],

    });

  }

  ngOnInit() {

  }


  addConducteur(){

    const formValues = this.conducteurForm.value;

    let conducteur = new Conducteur();

    conducteur = formValues

    this.conducteurService.addConducteur(conducteur).subscribe(
      data => {

        this.conducteurForm.reset();

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
