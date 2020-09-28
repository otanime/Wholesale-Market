import { DatePipe, formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AgentCommission } from 'src/app/mg/modules/AgentCommission';
import { FileDB } from 'src/app/mg/modules/FileDB';
import { LigneTarification } from 'src/app/mg/modules/LigneTarification';
import { LigneID } from 'src/app/mg/modules/LigneTarifPk';
import { Produit } from 'src/app/mg/modules/Produit';
import { Tarif } from 'src/app/mg/modules/Tarification';
import { TarifService } from '../services/tarif.service';

@Component({
  selector: 'app-tarification-form',
  templateUrl: './tarification-form.component.html',
  styleUrls: ['./tarification-form.component.css'],
  providers: [DatePipe]
})
export class TarificationFormComponent implements OnInit {

agents : AgentCommission[]
produits : Produit []
lg : LigneTarification
selectedFile: File;
pj : FileDB
tarifForm :FormGroup

  constructor(private datePipe: DatePipe ,private form: FormBuilder, private ts: TarifService , private router: Router, private route: ActivatedRoute) {

    this.tarifForm = form.group({
       idA : ['',Validators.required],
      idp: [''],
      dateFrom: ['', Validators.required],
      prix : ['', Validators.required],
      dateTo: ['', Validators.required],
  
    }, {validator: this.dateLessThan('dateFrom', 'dateTo')}); 
    

   }
   dateLessThan(from: string, to: string) {
    return (group: FormGroup): {[key: string]: any} => {
      let f = group.controls[from];
      let t = group.controls[to];
      if (f.value > t.value) {
        return {
          dates: "Date from should be less than Date to"
        };
      }
      return {};
    }
  }
  ngOnInit() {
    this.lg = new LigneTarification();
    this.lg.ligneID = new LigneID();
    this.lg.tarif = new Tarif() ;
    this.pj = new FileDB();
  }

  public onFileChanged(event) {
        //Select File
        this.selectedFile = event.target.files[0];
   
      }
      onSubmit() {
        this.pj.name = this.selectedFile.name
        this.pj.type = this.selectedFile.type
        this.pj.data = this.selectedFile

this.ts.sendFile(this.pj).subscribe(data => {
  console.log(data);

});

      }
      onChangedate(){
console.log(this.lg.dateFin)
 let dd = new Date(this.lg.dateDebut)
 let  df = new Date(this.lg.dateFin)
if(df>=dd){
df.setDate(dd.getDate() + 1 )


console.log(df.getDate() +" :"+ this.datePipe.transform(df, 'MM/dd/yyyy'))
}
      }







}
