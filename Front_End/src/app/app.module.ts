import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from"@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './master/footer/footer.component';
import { NavbarComponent } from './master/navbar/navbar.component';
import { SidebarComponent } from './master/sidebar/sidebar.component';
import { HeaderContentComponent } from './master/header-content/header-content.component';
import { ContentComponent } from './master/content/content.component';
import { TestComponent } from './master/test/test.component';
import { LoginComponent } from './master/login/login.component';
import { MasterComponent } from './master/master/master.component';
import { VendeursListComponent } from './mg/component/Vendeur/vendeurs-list/vendeurs-list.component';
import { VendeurFormComponent } from './mg/component/Vendeur/vendeur-form/vendeur-form.component';
import { VendeurViewComponent } from './mg/component/Vendeur/vendeur-view/vendeur-view.component';
import { PersoneviewComponent } from './mg/component/Personnel/personeview/personeview.component';
import { PersoneFormComponent } from './mg/component/Personnel/persone-form/persone-form.component';
import { PersonelListComponent } from './mg/component/Personnel/personel-list/personel-list.component';
import { ProduitFormComponent } from './mg/component/Produit/produit-form/produit-form.component';
import { ProduitListComponent } from './mg/component/Produit/produit-list/produit-list.component';
import { TypeproduitFormComponent } from './mg/component/Produit/typeproduit-form/typeproduit-form.component';
import { SoustypeproduitFormComponent } from './mg/component/Produit/soustypeproduit-form/soustypeproduit-form.component';
import { AddVehiculeComponent } from './mg/component/vehicule/add-vehicule/add-vehicule.component';
import { VehiculeDetailsComponent } from './mg/component/vehicule/vehicule-details/vehicule-details.component';
import { VehiculeListComponent } from './mg/component/vehicule/vehicule-list/vehicule-list.component';
import { AddConducteurComponent } from './mg/component/conducteur/add-conducteur/add-conducteur.component';
import { ConducteurDetailsComponent } from './mg/component/conducteur/conducteur-details/conducteur-details.component';
import { ConducteurListComponent } from './mg/component/conducteur/conducteur-list/conducteur-list.component';
import { UpdateConducteurComponent } from './mg/component/conducteur/update-conducteur/update-conducteur.component';
import { UpdateVehiculeComponent } from './mg/component/vehicule/update-vehicule/update-vehicule.component';
import { UpdateTypeVehiculeComponent } from './mg/component/type-vehicule/update-type-vehicule/update-type-vehicule.component';
import { AddTypeVehiculeComponent } from './mg/component/type-vehicule/add-type-vehicule/add-type-vehicule.component';
import { TypeVehiculeListComponent } from './mg/component/type-vehicule/type-vehicule-list/type-vehicule-list.component';
import { TypeVehiculeDetailsComponent } from './mg/component/type-vehicule/type-vehicule-details/type-vehicule-details.component';
import { AddEmballageComponent } from './mg/component/emballage/add-emballage/add-emballage.component';
import { UpdateEmballageComponent } from './mg/component/emballage/update-emballage/update-emballage.component';
import { EmballageListComponent } from './mg/component/emballage/emballage-list/emballage-list.component';
import { EmballageDetailsComponent } from './mg/component/emballage/emballage-details/emballage-details.component';
import { AddTypeEmballageComponent } from './mg/component/type-emballage/add-type-emballage/add-type-emballage.component';
import { UpdateTypeEmballageComponent } from './mg/component/type-emballage/update-type-emballage/update-type-emballage.component';
import { TypeEmballageDetailsComponent } from './mg/component/type-emballage/type-emballage-details/type-emballage-details.component';
import { TypeEmballageListComponent } from './mg/component/type-emballage/type-emballage-list/type-emballage-list.component';
import { SousTypeEmballageDetailsComponent } from './mg/component/sous-type-emballage/sous-type-emballage-details/sous-type-emballage-details.component';
import { SousTypeEmballageListComponent } from './mg/component/sous-type-emballage/sous-type-emballage-list/sous-type-emballage-list.component';
import { AddSousTypeEmballageComponent } from './mg/component/sous-type-emballage/add-sous-type-emballage/add-sous-type-emballage.component';
import { UpdateSousTypeEmballageComponent } from './mg/component/sous-type-emballage/update-sous-type-emballage/update-sous-type-emballage.component';
import { TypeEvenementDetailsComponent } from './mg/component/type-evenement/type-evenement-details/type-evenement-details.component';
import { TypeEvenementListComponent } from './mg/component/type-evenement/type-evenement-list/type-evenement-list.component';
import { AddTypeEvenementComponent } from './mg/component/type-evenement/add-type-evenement/add-type-evenement.component';
import { UpdateTypeEvenementComponent } from './mg/component/type-evenement/update-type-evenement/update-type-evenement.component';
import { UpdateEvenementComponent } from './mg/component/evenement/update-evenement/update-evenement.component';
import { AddEvenementComponent } from './mg/component/evenement/add-evenement/add-evenement.component';
import { EvenementListComponent } from './mg/component/evenement/evenement-list/evenement-list.component';
import { EvenementDetailsComponent } from './mg/component/evenement/evenement-details/evenement-details.component';

import { CategorieproduitFormComponent } from './mg/component/Produit/categorieproduit-form/categorieproduit-form.component';
import { TarificationFormComponent } from './mg/component/tarification/tarification-form/tarification-form.component';
import { TarificationListComponent } from './mg/component/tarification/tarification-list/tarification-list.component';
import { TarificationDetailComponent } from './mg/component/tarification/tarification-detail/tarification-detail.component';
import { UpdatePesageComponent } from './mg/component/balance/pesage/update-pesage/update-pesage.component';
import { AddPesageComponent } from './mg/component/balance/pesage/add-pesage/add-pesage.component';
import { PesageListComponent } from './mg/component/balance/pesage/pesage-list/pesage-list.component';
import { PesageDetailsComponent } from './mg/component/balance/pesage/pesage-details/pesage-details.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    HeaderContentComponent,
    ContentComponent,
    TestComponent,
    LoginComponent,
    MasterComponent,
    VendeursListComponent,
    VendeurFormComponent,
    VendeurViewComponent,
    PersonelListComponent,
    PersoneFormComponent,
    PersoneviewComponent,

    ProduitFormComponent,
    ProduitListComponent,
    TypeproduitFormComponent,
    SoustypeproduitFormComponent,
    CategorieproduitFormComponent,
    AddVehiculeComponent,
    VehiculeDetailsComponent,
    VehiculeListComponent,
    AddConducteurComponent,
    ConducteurDetailsComponent,
    ConducteurListComponent,
    UpdateConducteurComponent,
    UpdateVehiculeComponent,
    UpdateTypeVehiculeComponent,
    AddTypeVehiculeComponent,
    TypeVehiculeListComponent,
    TypeVehiculeDetailsComponent,
    AddEmballageComponent,
    UpdateEmballageComponent,
    EmballageListComponent,
    EmballageDetailsComponent,
    AddTypeEmballageComponent,
    UpdateTypeEmballageComponent,
    TypeEmballageDetailsComponent,
    TypeEmballageListComponent,
    SousTypeEmballageDetailsComponent,
    SousTypeEmballageListComponent,
    AddSousTypeEmballageComponent,
    UpdateSousTypeEmballageComponent,
    TypeEvenementDetailsComponent,
    TypeEvenementListComponent,
    AddTypeEvenementComponent,
    UpdateTypeEvenementComponent,
    UpdateEvenementComponent,
    AddEvenementComponent,
    EvenementListComponent,
    EvenementDetailsComponent,
    TarificationFormComponent,
    TarificationListComponent,
    TarificationDetailComponent,
    UpdatePesageComponent,
    AddPesageComponent,
    PesageListComponent,
    PesageDetailsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
