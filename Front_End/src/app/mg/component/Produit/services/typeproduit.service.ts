import { Injectable } from '@angular/core';
import { TypeProduit } from 'src/app/mg/modules/TypeProduit';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URLS } from 'src/app/mg/config/api.url.config';
const TypeProduitsUrl = 'http://localhost:8084/typeproduits';
@Injectable({
  providedIn: 'root'
})
export class TypeproduitService {

  constructor(private http: HttpClient) { }
  
  getTypes() {
    return this.http.get<TypeProduit[]>(API_URLS.TYPE_PRODUIT_API); 
  }
  getType(id) {
    return this.http.get<TypeProduit>(API_URLS.TYPE_PRODUIT_API+`/${id}`);
  }

  createTypeProduit(TypeProduit: TypeProduit): Observable<any> {
    return this.http.post<TypeProduit>(API_URLS.TYPE_PRODUIT_API,TypeProduit);
  }

  updateTypeProduit(id, data) {
    return this.http.put(API_URLS.TYPE_PRODUIT_API+`/${id}` ,data);
  }

  deleteTypeProduit(id) {
    return this.http.delete(API_URLS.TYPE_PRODUIT_API+`/${id}`);
  }
}
