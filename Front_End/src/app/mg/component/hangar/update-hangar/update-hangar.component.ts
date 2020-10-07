import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategorieProduit } from 'src/app/mg/modules/CategorieProduit';
import { Hangar, Hangarbase } from 'src/app/mg/modules/Hangar';
import { CategorieService } from '../../Produit/services/categorie.service';
import { HangarService } from '../services/hangar.service';
declare var $ :any;
@Component({
  selector: 'app-update-hangar',
  templateUrl: './update-hangar.component.html',
  styleUrls: ['./update-hangar.component.css']
})
export class UpdateHangarComponent implements OnInit {
  @Input()  hangar: Hangar

  @Output() isClosed = new EventEmitter<boolean>();

  HangarForm :  FormGroup
  categories : CategorieProduit[];

  selectedTypeHangar : number
  

  constructor(
    private hangarService : HangarService,
    private categorieService : CategorieService,
    private form: FormBuilder,
  ) {

   
    this.HangarForm = form.group({

      libelle: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      description: ['', Validators.compose([Validators.required, Validators.minLength(12)])],
      categorieHangar: ['', Validators.compose([Validators.required])],

    });

  }

  ngOnInit() {

    this.loadData()

  }

  loadData(){

    this.categorieService.getCategories().subscribe(
      data => {

        this.categories = data

      },
      error => {
        console.log("error")
      },
      () => { console.log('TypeHangar Data loading ... Done')}
    );
  }

  ngOnChanges(){

    this.HangarForm.reset()

    if (!!this.hangar) {

      this.selectedTypeHangar = this.hangar.categorieProduit.idProductCategory

      this.HangarForm.setValue({

        libelle : this.hangar.libelle,
        description : this.hangar.description,
        categorieHangar : this.hangar.categorieProduit.idProductCategory
 
      })

    }

  }


  updateHangar(){

    const formValues = this.HangarForm.value;

    let hangar = new Hangarbase();

    hangar = formValues

    hangar.numHangar = this.hangar.numHangar

    hangar.categorieProduit = this.selectedTypeHangar
 

    this.hangarService.addHangar(hangar).subscribe(
        data => {

            this.HangarForm.reset();
            this.onResetData()

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

  onSelectCategorieHangar(typeHangarID){

    this.selectedTypeHangar =this.hangar.categorieProduit.idProductCategory

  }

  
  onResetData(){

    this.selectedTypeHangar = null

  }

}
