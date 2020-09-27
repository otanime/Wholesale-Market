import { Injectable } from '@angular/core';
import { Produit } from 'src/app/mg/modules/Produit';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
const ProduitsUrl = 'http://localhost:8084/produits';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  constructor(private http: HttpClient) { }
  
  getProducts() {
    return this.http.get<Produit[]>(`${ProduitsUrl}/all`); 
  }
  getproduct(id) {
    return this.http.get<Produit>(`${ProduitsUrl}/find/${id}`);
  }

  createProduit(Produit: Produit): Observable<any> {
    return this.http.post<Produit>(ProduitsUrl + '/save',Produit);
  }

  updateProduit(id, data) {
    return this.http.put(`${ProduitsUrl}/${id}` ,data);
  }

  deleteProduit(id) {
    return this.http.delete(`${ProduitsUrl}/delete/${id}`);
  }
  getsoustypes(st) {
    return this.http.get<Produit>(`${ProduitsUrl}/find/${st}`);
  }
  getcaregories(st) {
    return this.http.get<Produit>(`${ProduitsUrl}/find/${st}`);
  }

}
