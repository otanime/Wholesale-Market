import { Component, OnInit, ViewEncapsulation, EventEmitter, Input, Output } from '@angular/core';
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
  selector: 'app-update-evenement',
  templateUrl: './update-evenement.component.html',
  styleUrls: ['./update-evenement.component.css']
})
export class UpdateEvenementComponent implements OnInit {

  @Input()  evenement: Evenement

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

  ngOnChanges(){

    this.evenementForm.reset()

    if (!!this.evenement) {

      this.evenementForm.setValue({

        description : this.evenement.description,
        observation : this.evenement.observation,

        dateDeclaration : formatDate(this.evenement.dateDeclaration, 'dd/MM/yyyy HH:mm', 'en'),
        dateEvenement : this.evenement.dateEvenement,

        matriculeVehicule : this.evenement.matriculeVehicule,
        conducteurCin : this.evenement.conducteurCin,
        typeEvenement : this.evenement.typeEvenement.id,
      })

    }



  }

  updateEvenement(){

    const formValues = this.evenementForm.value;

    let evenement = new Evenement();

    evenement = formValues


    evenement.id = this.evenement.id

    const typeEvenementID = this.evenementForm.controls.typeEvenement.value
    evenement.typeEvenement =  this.typeEvenements.find(x => x.id == typeEvenementID)

    evenement.dateDeclaration = this.evenement.dateDeclaration

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

  annulationEvenement(){

    this.evenementService.annulationEvenement(this.evenement).subscribe(
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

  confirmationEvenement(){

    this.evenementService.confirmationEvenement(this.evenement).subscribe(
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
