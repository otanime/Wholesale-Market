import { Component, OnInit, ViewEncapsulation, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";


import { Vehicule } from "../../../modules/vehicule";
import { VehiculeService } from "../vehicule.service";

import { TypeVehicule } from "../../../modules/typeVehicule";
import { TypeVehiculeService } from "../../type-vehicule/type-vehicule.service";

declare var $ :any;

@Component({
  selector: 'app-add-vehicule',
  templateUrl: './add-vehicule.component.html',
  styleUrls: ['./add-vehicule.component.css']
})
export class AddVehiculeComponent implements OnInit {

  @Output() isClosed = new EventEmitter<boolean>();


  selectedVehicule : Vehicule
  vehiculeForm :  FormGroup

  typeVehicules : TypeVehicule[];
  selectedTypeVehicule : TypeVehicule;

  existsMatricule : boolean = false
  carburants = ["GASOIL", "ESSENCE", "AUTRE"]


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
        this.selectedTypeVehicule = this.typeVehicules[0]
        this.vehiculeForm.controls.typeVehicule.setValue(this.typeVehicules[0].id);
        this.vehiculeForm.controls.carburant.setValue(this.carburants[0]);

      },
      error => {
        console.log("error")
      },
      () => {}
    );
  }

  addVehicule(){

    const formValues = this.vehiculeForm.value;

    let vehicule = new Vehicule();

    vehicule = formValues

    this.selectedVehicule = {

      id : 0,
      matricule: vehicule.matricule,

      datePremierCirculation: vehicule.datePremierCirculation,
      typeVehicule: this.selectedTypeVehicule,

      carburant: vehicule.carburant,
      poidsVide: vehicule.poidsVide,

    }

    this.vehiculeService.addVehicule(this.selectedVehicule).subscribe(
      data => {

        this.vehiculeForm.reset();

        this.isClosed.emit(true);

        $('.modal').modal('hide');

        this.existsMatricule = false


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

          if (data) {

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

      this.existsMatricule = false
  }
}
