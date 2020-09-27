import { Component, OnInit } from '@angular/core';
import { PersonneService } from '../services/personne.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personel-list',
  templateUrl: './personel-list.component.html',
  styleUrls: ['./personel-list.component.css']
})
export class PersonelListComponent implements OnInit {

  personnes;
  message;
    constructor(private  personneservice : PersonneService,private route :Router ) { }
    ngOnInit(): void {
      this.retrieveClints();
    }
    retrieveClints() {
      this.personneservice.getPersonnes()
        .subscribe(
          data => {
            this.personnes = data;
            console.log(data);
          },
          error => {
            console.log(error);
          });  
    }
    deletepersonne(id){
      console.log(`delete personne ${id}`);
      this.personneservice.deletePersonne(id).subscribe(
        response=> {console.log(response);
          this.message=`Delete of personne ${id} Successful !`;
          this.retrieveClints();
    });
   
  }
  viewpersonne(id){
    this.route.navigate(['../personnels/view',id])
  }
  
  updatepersonne(id){
    this.route.navigate(['../personnels/add',id])
  }
}
