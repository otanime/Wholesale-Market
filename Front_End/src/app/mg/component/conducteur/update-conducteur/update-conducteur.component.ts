import { Component, OnInit, ViewEncapsulation, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { Conducteur } from "../../../modules/conducteur";
import { ConducteurService } from "../conducteur.service";

declare var $ :any;
declare var toastr:any;

@Component({
  selector: 'app-update-conducteur',
  templateUrl: './update-conducteur.component.html',
  styleUrls: ['./update-conducteur.component.css'],
  encapsulation: ViewEncapsulation.Emulated,

})
export class UpdateConducteurComponent implements OnInit {

  @Input()  conducteur: Conducteur

  @Output() isClosed = new EventEmitter<boolean>();

  conducteurForm :  FormGroup

  constructor(
    private conducteurService : ConducteurService,
    private form: FormBuilder,
  ) {

    this.conducteurForm = form.group({

      cin: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.pattern('[a-zA-Z]{1,2}[0-9]{5,6}')])],
      nom: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      prenom: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      tel: ['', Validators.compose([Validators.minLength(10), Validators.maxLength(10), Validators.pattern('0[0-9]{9}') ])],
      adresse: ['', Validators.compose([Validators.minLength(10), Validators.maxLength(125)])],

    });
  }

  ngOnInit() {

  }

  ngOnChanges(){

    this.conducteurForm.reset()

    this.conducteurForm.setValue({

      cin : this.conducteur.cin,
      nom : this.conducteur.nom,
      prenom : this.conducteur.prenom,
      tel : this.conducteur.tel,
      adresse : this.conducteur.adresse,
    })

  }

  isCinAvailable(cin : string){

    return new Promise((resolve) => {

      this.conducteurService.getConducteurCin(cin).subscribe(
        data => {

          resolve(data == null || this.conducteur.id == data.id)

        },
        error => {
          console.log("error");
        },
        () => {


        }
      )

    });


  }

  isTelAvailable(tel : string){

    return new Promise((resolve) => {

      this.conducteurService.getConducteurTel(tel).subscribe(
        data => {

          resolve(data == null || this.conducteur.id == data.id)

        },
        error => {
          console.log("error");
        },
        () => {


        }
      )

    });


  }

  updateTestConducteur(){

    const formValues = this.conducteurForm.value;

    let conducteur = new Conducteur();

    conducteur = formValues;

    conducteur.id = this.conducteur.id;

    this.isCinAvailable(conducteur.cin).then(resCin => {

      if (resCin)
        this.isTelAvailable(conducteur.tel).then(resTel => {

          if (resTel)
            this.updateConducteur(conducteur)
          else
            console.log("Tel est deja exist");


        });
      else
        console.log("Cin est deja exist");
    });





  }

  updateConducteur(conducteur : Conducteur){

    this.conducteurService.updateConducteur(conducteur).subscribe(
        data => {

            this.conducteurForm.reset();

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
