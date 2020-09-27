import { Component, OnInit, ViewEncapsulation, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { TypeVehicule } from "../../../modules/typeVehicule";
import { TypeVehiculeService } from "../type-vehicule.service";

declare var $ :any;

@Component({
  selector: 'app-update-type-vehicule',
  templateUrl: './update-type-vehicule.component.html',
  styleUrls: ['./update-type-vehicule.component.css']
})
export class UpdateTypeVehiculeComponent implements OnInit {

  @Input()  typeVehicule: TypeVehicule

  @Output() isClosed = new EventEmitter<boolean>();

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

  ngOnChanges(){

    this.typeVehiculeForm.reset()

    this.typeVehiculeForm.setValue({

      type : this.typeVehicule.type,
      poidsMin : this.typeVehicule.poidsMin,
      poidsMax : this.typeVehicule.poidsMax,
    })

  }



  updateTypeVehicule(){

    const formValues = this.typeVehiculeForm.value;

    let typeVehicule = new TypeVehicule();

    typeVehicule = formValues;

    typeVehicule.id = this.typeVehicule.id;

    this.typeVehiculeService.updateTypeVehicule(typeVehicule).subscribe(data => {
        this.typeVehiculeForm.reset();

        this.isClosed.emit(true);

        $('.modal').modal('hide');

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
