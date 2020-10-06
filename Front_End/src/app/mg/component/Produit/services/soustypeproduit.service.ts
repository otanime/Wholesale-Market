import { Injectable } from '@angular/core';
import { SousTypeProduit } from 'src/app/mg/modules/SousTypeProduit';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URLS } from 'src/app/mg/config/api.url.config';
const SousTypeProduitsUrl = 'http://localhost:8084/typeproduits';
@Injectable({
  providedIn: 'root'
})
export class SousSousTypeProduitService {


  constructor(private http: HttpClient) { }
  
  getsousTypes() {
    return this.http.get<SousTypeProduit[]>(API_URLS.SOUSTYPE_PRODUIT_API); 
  }
  getType(id) {
    return this.http.get<SousTypeProduit>(API_URLS.SOUSTYPE_PRODUIT_API+`/${id}`);
  }

  createSousTypeProduit(SousTypeProduit: SousTypeProduit): Observable<any> {
    return this.http.post<SousTypeProduit>(API_URLS.SOUSTYPE_PRODUIT_API,SousTypeProduit);
  }

  updateSousTypeProduit(id, data) {
    return this.http.put(API_URLS.SOUSTYPE_PRODUIT_API+`/${id}` ,data);
  }

  deleteSousTypeProduit(id) {
    return this.http.delete(API_URLS.SOUSTYPE_PRODUIT_API+`/${id}`);
  }
}
