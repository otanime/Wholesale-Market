import { Injectable } from '@angular/core';
import { Produit } from 'src/app/mg/modules/Produit';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { API_URLS } from 'src/app/mg/config/api.url.config';
const ProduitsUrl = 'http://localhost:8084/produits';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  constructor(private http: HttpClient) { }
  
  getProducts() {
    return this.http.get<Produit[]>(API_URLS.PRODUIT_API); 
  }
  getproduct(id) {
    return this.http.get<Produit>(API_URLS.PRODUIT_API+`/${id}`);
  }

  createProduit(Produit: Produit): Observable<any> {
    return this.http.post<Produit>(API_URLS.PRODUIT_API,Produit);
  }

  updateProduit(id, data) {
    return this.http.put(API_URLS.PRODUIT_API+`/${id}` ,data);
  }

  deleteProduit(id) {
    return this.http.delete(API_URLS.PRODUIT_API+`/${id}`);
  }


}
