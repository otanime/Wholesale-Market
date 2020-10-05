import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './master/test/test.component';
import { LoginComponent } from './master/login/login.component';
import { MasterComponent } from './master/master/master.component';
import { VendeursListComponent } from './mg/component/Vendeur/vendeurs-list/vendeurs-list.component';
import { VendeurFormComponent } from './mg/component/Vendeur/vendeur-form/vendeur-form.component';
import { VendeurViewComponent } from './mg/component/Vendeur/vendeur-view/vendeur-view.component';
import { PersonelListComponent } from './mg/component/Personnel/personel-list/personel-list.component';
import { PersoneFormComponent } from './mg/component/Personnel/persone-form/persone-form.component';
import { PersoneviewComponent } from './mg/component/Personnel/personeview/personeview.component';
import { ProduitListComponent } from './mg/component/Produit/produit-list/produit-list.component';
import { ProduitFormComponent } from './mg/component/Produit/produit-form/produit-form.component';
import { TypeproduitFormComponent } from './mg/component/Produit/typeproduit-form/typeproduit-form.component';
import { SoustypeproduitFormComponent } from './mg/component/Produit/soustypeproduit-form/soustypeproduit-form.component';
import { CategorieproduitFormComponent } from './mg/component/Produit/categorieproduit-form/categorieproduit-form.component';

// Conducteur MS
import { ConducteurListComponent } from './mg/component/conducteur/conducteur-list/conducteur-list.component';

// Vehicule MS
import { VehiculeListComponent } from './mg/component/vehicule/vehicule-list/vehicule-list.component';
import { TypeVehiculeListComponent } from './mg/component/type-vehicule/type-vehicule-list/type-vehicule-list.component';

// Emballage MS
import { EmballageListComponent } from './mg/component/emballage/emballage-list/emballage-list.component';
import { TypeEmballageListComponent } from './mg/component/type-emballage/type-emballage-list/type-emballage-list.component';

// Evenement MS
import { EvenementListComponent } from './mg/component/evenement/evenement-list/evenement-list.component';
import { TypeEvenementListComponent } from './mg/component/type-evenement/type-evenement-list/type-evenement-list.component';
import { TarificationListComponent } from './mg/component/tarification/tarification-list/tarification-list.component';
import { TarificationFormComponent } from './mg/component/tarification/tarification-form/tarification-form.component';
import { TarificationDetailComponent } from './mg/component/tarification/tarification-detail/tarification-detail.component';



const routes: Routes = [
  {path: '',redirectTo : 'login',pathMatch : 'full'},

  // add your new path here
  {path: '',component : MasterComponent,children :[

  {path: 'test',component : TestComponent},
  {path: 'personnels/list',component : PersonelListComponent},
  {path: 'personnels/add/:id',component : PersoneFormComponent},
  {path: 'personnels/view/:id',component : PersoneviewComponent},
  {path: 'vendeurs/list',component : VendeursListComponent},
  {path: 'vendeurs/add/:id',component : VendeurFormComponent},
  {path: 'vendeurs/view/:id',component : VendeurViewComponent},
  {path: 'produits/list',component : ProduitListComponent},
  {path: 'produits/add/-1',component : ProduitFormComponent},
  {path: 'produits/type/add/:id',component : TypeproduitFormComponent},
  {path: 'produits/soustype/add/:id',component : SoustypeproduitFormComponent},
  {path: 'produits/categorie/add/:id',component : CategorieproduitFormComponent},
  {path: 'tarifs/list',component : TarificationListComponent},
  {path: 'tarifs/add/:id',component : TarificationFormComponent},
  {path: 'tarifs/list',component : TarificationListComponent},
  {path: 'tarifs/view',component : TarificationDetailComponent},
  
    // Conducteur MS
    {path: 'conducteurs',component : ConducteurListComponent},

    // Vehicule MS
    {path: 'vehicules',component : VehiculeListComponent},
    {path: 'vehicules/types',component : TypeVehiculeListComponent},

    // Emballage MS
    {path: 'emballages',component : EmballageListComponent},
    {path: 'emballages/types',component : TypeEmballageListComponent},
    {path: 'emballages/sous-type',component : EmballageListComponent},

    // Evenement MS
    {path: 'evenements',component : EvenementListComponent},
    {path: 'evenements/types',component : TypeEvenementListComponent},

]},
  {path: 'test',component : TestComponent},
  {path: 'login',component : LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
