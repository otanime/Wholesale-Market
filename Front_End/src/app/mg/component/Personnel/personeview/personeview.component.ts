import { Component, OnInit } from '@angular/core';
import { PersonneService } from '../services/personne.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Personne } from 'src/app/mg/modules/personne';

@Component({
  selector: 'app-personeview',
  templateUrl: './personeview.component.html',
  styleUrls: ['./personeview.component.css']
})
export class PersoneviewComponent implements OnInit {
personne;
id
 
  constructor(private vs : PersonneService,private router :Router,private route :ActivatedRoute ,) { }
  

  ngOnInit() {
    console.log(this.route.snapshot.params['id'])
    this.id =this.route.snapshot.params['id']
    this.personne = new Personne();
    if(this.id != -1){
      this.vs.getPersonne(this.id).subscribe(
        data => this.personne=data
      );
    }
  }
  deletepersonne(id){
    console.log(`delete Personne ${id}`);
    this.vs.deletePersonne(id).subscribe(
      response=> {console.log(response);
        this.router.navigate(['./personnels/list']);
       
  });
 
}

updatepersonne(id){
  this.router.navigate(['./personnels/add',id])
}

}
