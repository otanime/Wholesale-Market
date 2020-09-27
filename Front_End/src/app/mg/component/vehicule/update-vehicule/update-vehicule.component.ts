import { Component, OnInit, ViewEncapsulation, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { Vehicule } from "../../../modules/vehicule";
import { VehiculeService } from "../vehicule.service";

import { TypeVehicule } from "../../../modules/typeVehicule";
import { TypeVehiculeService } from "../../type-vehicule/type-vehicule.service";

declare var $ :any;

@Component({
  selector: 'app-update-vehicule',
  templateUrl: './update-vehicule.component.html',
  styleUrls: ['./update-vehicule.component.css']
})
export class UpdateVehiculeComponent implements OnInit {

  @Input()  vehicule: Vehicule
  @Output() isClosed = new EventEmitter<boolean>();

  typeVehicules : TypeVehicule[];
  selectedTypeVehicule : TypeVehicule;
  selectedVehicule : Vehicule;

  carburants = ["GASOIL", "ESSENCE", "AUTRE"]
  existsMatricule : boolean = false

  vehiculeForm :  FormGroup

  constructor(
    private vehiculeService : VehiculeService,
    private typeVehiculeService : TypeVehiculeService,
    private form: FormBuilder,
  ) {


    this.vehiculeForm = form.group({

      // matricule: ["", Validators.compose([Validators.required, Validators.minLength(5), , Validators.pattern('[0-9]+(-)[\u0600-\u06FF](-)[0-9]{1,2}')])],
      matricule: ["", Validators.compose([Validators.required, Validators.minLength(5), Validators.pattern('[0-9]+(-)[A-Za-z](-)[0-9]{1,2}')])],
      datePremierCirculation: ['', Validators.compose([Validators.required])],
      typeVehicule: ['', Validators.compose([Validators.required])],
      carburant: ['', Validators.compose([Validators.required ])],
      poidsVide: ['', Validators.compose([Validators.required])],

    });

  }

  ngOnInit() {

    // Get data
    this.loadData()

  }

  loadData(){

    this.typeVehiculeService.getTypeVehicules().subscribe(
      data => {

        this.typeVehicules = data

      },
      error => {
        console.log("error")
      },
      () => {}
    );
  }

  ngOnChanges(){

    this.existsMatricule = false
    this.vehiculeForm.reset()

    if (this.vehicule != undefined) {

      this.vehiculeForm.setValue({

        matricule : this.vehicule.matricule,
        datePremierCirculation : this.vehicule.datePremierCirculation,
        typeVehicule : this.vehicule.typeVehicule.id,
        carburant : this.vehicule.carburant,
        poidsVide : this.vehicule.poidsVide,
      })

      this.selectedTypeVehicule = this.vehicule.typeVehicule

    }

  }

  updateVehicule(){

    const formValues = this.vehiculeForm.value;

    let vehicule = new Vehicule();

    vehicule = formValues

    this.selectedVehicule = {

      id : this.vehicule.id,
      matricule: vehicule.matricule,

      datePremierCirculation: vehicule.datePremierCirculation,
      typeVehicule: this.selectedTypeVehicule,

      carburant: vehicule.carburant,
      poidsVide: vehicule.poidsVide,

    }

    this.vehiculeService.updateVehicule(this.selectedVehicule).subscribe(data => {
        this.vehiculeForm.reset();

        this.isClosed.emit(true);

        $('.modal').modal('hide');

      },
      error => {
          console.log("error");
        },
        () => {}
    );

  }

  onSelectTypeVehicule(type_id){

    this.selectedTypeVehicule = this.typeVehicules.find(typeVehicule => typeVehicule.id == type_id)

  }

  onChangePoidsVide(poids){

    if (poids < this.selectedTypeVehicule.poidsMin)
      this.vehiculeForm.controls.poidsVide.setValue(this.selectedTypeVehicule.poidsMin);

    if (poids > this.selectedTypeVehicule.poidsMax)
      this.vehiculeForm.controls.poidsVide.setValue(this.selectedTypeVehicule.poidsMax);

  }

  existsByMatricule(matricule){

    if(matricule != "")
      this.vehiculeService.existsByMatricule(matricule).subscribe(
        data => {

          if (data && this.vehicule.matricule != matricule) {

            this.vehiculeForm.controls.matricule.setErrors({'incorrect': true});
            this.existsMatricule = true

          }else{

            this.existsMatricule = false
          }

        },
        error => {
          console.log("error");
        },
        () => {}
      );

  }
}
