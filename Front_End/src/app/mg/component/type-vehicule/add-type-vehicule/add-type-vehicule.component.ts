import { Component, OnInit, ViewEncapsulation, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { TypeVehicule } from "../../../modules/typeVehicule";
import { TypeVehiculeService } from "../type-vehicule.service";

declare var $ :any;

@Component({
  selector: 'app-add-type-vehicule',
  templateUrl: './add-type-vehicule.component.html',
  styleUrls: ['./add-type-vehicule.component.css']
})
export class AddTypeVehiculeComponent implements OnInit {

  @Output() isClosed = new EventEmitter<boolean>();


  selectedTypeVehicule : TypeVehicule
  typeVehiculeForm :  FormGroup

  constructor(
    private typeVehiculeService : TypeVehiculeService,
    private form: FormBuilder,
  ) {


    this.typeVehiculeForm = form.group({

      type: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      poidsMin: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]+')])],
      poidsMax: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]+')])],

    });

  }

  ngOnInit() {

  }


  addTypeVehicule(){

    const formValues = this.typeVehiculeForm.value;

    let typeVehicule = new TypeVehicule();

    typeVehicule = formValues

    this.typeVehiculeService.addTypeVehicule(typeVehicule).subscribe(
      data => {

        this.typeVehiculeForm.reset();

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
      () => {}
    );


  }

  onChangeWeight(){

    let minWeight : number = Number(this.typeVehiculeForm.controls.poidsMin.value)
    let maxWeight : number = Number(this.typeVehiculeForm.controls.poidsMax.value)

    if (minWeight >= maxWeight) {

      if(maxWeight <= 1) maxWeight = minWeight
      maxWeight = minWeight + 1
    }


    this.typeVehiculeForm.controls.poidsMin.setValue(minWeight)
    this.typeVehiculeForm.controls.poidsMax.setValue(maxWeight)

  }

}
