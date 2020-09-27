import { Component, OnInit, ViewEncapsulation, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { formatDate } from '@angular/common';

import { Evenement } from "../../../modules/evenement";
import { EvenementService } from "../evenement.service";

import { TypeEvenement } from "../../../modules/typeEvenement";
import { TypeEvenementService } from "../../type-evenement/type-evenement.service";


import { Vehicule } from "../../../modules/vehicule";
import { VehiculeService } from "../../vehicule/vehicule.service";

import { Conducteur } from "../../../modules/conducteur";
import { ConducteurService } from "../../conducteur/conducteur.service";

declare var $ :any;

@Component({
  selector: 'app-add-evenement',
  templateUrl: './add-evenement.component.html',
  styleUrls: ['./add-evenement.component.css']
})
export class AddEvenementComponent implements OnInit {

  @Output() isClosed = new EventEmitter<boolean>();


  typeEvenements : TypeEvenement[]
  evenementForm :  FormGroup

  vehicules : Vehicule[]
  conducteurs : Conducteur[]

  constructor(
    private evenementService : EvenementService,
    private vehiculeService : VehiculeService,
    private conducteurService : ConducteurService,
    private typeEvenementService : TypeEvenementService,
    private form: FormBuilder,
  ) {


    this.evenementForm = form.group({

      description: ['', Validators.compose([Validators.required, Validators.minLength(10)])],
      observation: [''],

      dateDeclaration: ['', Validators.compose([Validators.required])],
      dateEvenement: ['', Validators.compose([Validators.required])],

      matriculeVehicule: ['', Validators.compose([Validators.required])],
      conducteurCin: ['', Validators.compose([Validators.required])],

      typeEvenement: ['', Validators.compose([Validators.required])],

    });

    this.setCurrentDate();



  }

  setCurrentDate(){

    this.evenementForm.controls.dateDeclaration.setValue(formatDate(new Date(), 'dd/MM/yyyy HH:mm', 'en'));

  }


  ngOnInit() {

    this.loadData()

  }

  loadData(){

    this.typeEvenementService.getTypeEvenements().subscribe(
      data => {

        this.typeEvenements = data
      },
      error => {
        console.log("error")
      },
      () => { console.log('TypeEvenement Data loading ... Done')}
    );

    this.conducteurService.getConducteurs().subscribe(
      data => {

        this.conducteurs = data

      },
      error => {
        console.log("error")
      },
      () => { console.log('Conducteur Data loading ... Done')}
    );

    this.vehiculeService.getVehicules().subscribe(
      data => {

        this.vehicules = data

      },
      error => {
        console.log("error")
      },
      () => { console.log('Vehicule Data loading ... Done')}
    );

  }


  addEvenement(){

    const formValues = this.evenementForm.value;

    let evenement = new Evenement();

    evenement = formValues

    const typeEvenementID = this.evenementForm.controls.typeEvenement.value

    evenement.typeEvenement =  this.typeEvenements.find(x => x.id == typeEvenementID)
    evenement.dateDeclaration = new Date()

    this.evenementService.addEvenement(evenement).subscribe(
      data => {

        this.evenementForm.reset();

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
