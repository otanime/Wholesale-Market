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
import { PersonneService } from '../../Personnel/services/personne.service';
import { ProduitService } from '../../Produit/services/produit.service';
import { TarifService } from '../services/tarif.service';

@Component({
  selector: 'app-tarification-form',
  templateUrl: './tarification-form.component.html',
  styleUrls: ['./tarification-form.component.css'],
  providers: [DatePipe]
})
export class TarificationFormComponent implements OnInit {

  agents: AgentCommission[]
  produits: Produit[]
  lg: LigneTarification
  selectedFile: File;
  pj: FileDB
  tarifForm: FormGroup
  tarifAdded: Tarif
  idt : number

  constructor(private datePipe: DatePipe, private form: FormBuilder, private tp: PersonneService, private tpr: ProduitService, private ts: TarifService, private router: Router, private route: ActivatedRoute) {

    this.tarifForm = form.group({
      idA: ['', Validators.required],
      idp: [''],
      dateFrom: ['', Validators.required],
      prix: ['', Validators.required],
      dateTo: ['', Validators.required],

    }, { validator: this.dateLessThan('dateFrom', 'dateTo') });


  }
  dateLessThan(from: string, to: string) {
    return (group: FormGroup): { [key: string]: any } => {
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
    this.lg.tarif = new Tarif();

    this.tp.getAgentsComissions().subscribe(data => {
      this.agents = data
    });
    this.tpr.getProducts().subscribe(data => {
      this.produits = data
    });
    this.setCurrentDate()
  }

  public onFileChanged(event) {
    //Select File
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile.name);
    console.log(this.selectedFile);

  }

  onSubmit() {
    console.log(this.selectedFile.name);
    console.log(this.selectedFile);
    this.tarifAdded = new Tarif();
    this.lg.oldPrix = 0
    this.lg.dateModification = new Date(this.datePipe.transform(new Date(), 'MM/dd/yyyy'))
    this.ts.addTarif(this.lg.tarif)
      .subscribe(data => 
        {   
          this.idt = data.idTarif
          this.lg.ligneID.idTarif =this.idt
          this.lg.tarif.idTarif= this.idt

          this.ts.addFile(this.idt, this.selectedFile).subscribe(data => {
            console.log(data);
          });
   

          

    this.ts.createtarif(this.lg)
    .subscribe(data => {
      console.log(data);
    });

          }
      );
   

 
   
    this.router.navigate(['/tarifs/list']);

  }
  onChangedate() {


  }
  setCurrentDate() {

    this.tarifForm.controls.dateFrom.setValue(formatDate(new Date(), 'dd/MM/yyyy HH:mm', 'en'));

  }







}
