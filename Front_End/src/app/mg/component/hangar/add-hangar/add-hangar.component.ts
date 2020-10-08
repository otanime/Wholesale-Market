import { Component, OnInit, Output ,EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategorieProduit } from 'src/app/mg/modules/CategorieProduit';
import { Hangar, Hangarbase } from 'src/app/mg/modules/Hangar';
import { CategorieService } from '../../Produit/services/categorie.service';
import { HangarService } from '../services/hangar.service';

declare var $ :any;
@Component({
  selector: 'app-add-hangar',
  templateUrl: './add-hangar.component.html',
  styleUrls: ['./add-hangar.component.css']
})
export class AddHangarComponent implements OnInit {

  @Output() isClosed = new EventEmitter<boolean>();


  selectedHangar : Hangar
  HangarForm :  FormGroup

  categories : CategorieProduit[];
  selectedCategorieHangar : number



  constructor(
    private HangarService : HangarService,
    private CategorieService : CategorieService,
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

    this.CategorieService.getCategories().subscribe(
      data => {

        this.categories = data

      },
      error => {
        console.log("error")
      },
      () => { console.log('CategorieHangar Data loading ... Done')}
    );
  }

  addHangar(){

    const formValues = this.HangarForm.value;

    let Hanga = new Hangarbase();

    Hanga = formValues

    Hanga.categorieProduit = this.selectedCategorieHangar

    this.HangarService.addHangar(Hanga).subscribe(
      data => {

        this.HangarForm.reset()
        this.onResetData()

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

  onSelectCategorieHangar(CategorieHangarID){
this.selectedCategorieHangar = CategorieHangarID
   }



  onResetData(){

    this.selectedCategorieHangar = null
  
  }

}
