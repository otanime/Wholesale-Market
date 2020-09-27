import { Component, OnInit } from '@angular/core';
import { Vendeur } from 'src/app/mg/modules/Vendeur';
import { VendeurService } from '../services/vendeur.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-vendeur-form',
  templateUrl: './vendeur-form.component.html',
  styleUrls: ['./vendeur-form.component.css']
})
export class VendeurFormComponent implements OnInit {
  vendeur: Vendeur
  id;
  vendeurModelForm: FormGroup
  constructor(private form: FormBuilder, private vs: VendeurService, private router: Router, private route: ActivatedRoute) {
    this.vendeurModelForm = form.group({
      nom: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      prenom: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      tel: ['', Validators.compose([Validators.minLength(10), Validators.maxLength(10), Validators.pattern('0[0-9]{9}')])],
      address: ['', Validators.compose([Validators.minLength(10), Validators.maxLength(125)])],
      patent: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(6)])],
    });
  }
  ngOnInit() {
    console.log(this.route.snapshot.params['id'])
    this.id = this.route.snapshot.params['id']
    this.vendeur = new Vendeur();
    if (this.id != -1) {
      this.vs.getVendeur(this.id).subscribe(
        data => this.vendeur = data
      );
    }
  }
  onSubmit(vendeurModelForm: NgForm) {
    console.log(vendeurModelForm.form, vendeurModelForm.value);
    if (this.id === -1) {
      this.vs.createvendeur(this.vendeur)
        .subscribe(data => {
          console.log(data);

        });
      this.router.navigate(['./vendeurs/list']);
    } else {
      this.vs.createvendeur(this.vendeur)
        .subscribe(data => {
          console.log(data);
          this.router.navigate(['./vendeurs/list']);
        });
    }
  }
}
