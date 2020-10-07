import { Injectable } from '@angular/core';
import { CategorieProduit } from 'src/app/mg/modules/CategorieProduit';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URLS } from 'src/app/mg/config/api.url.config';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor(private http: HttpClient) { }

  getCategories() {
    return this.http.get<CategorieProduit[]>(API_URLS.CATEGORIE_PRODUIT_API);
  }
  getcategorie(id) {
    return this.http.get<CategorieProduit>(API_URLS.CATEGORIE_PRODUIT_API+`/${id}`);
  }

  createCategorieProduit(CategorieProduit: CategorieProduit): Observable<any> {
    return this.http.post<CategorieProduit>(API_URLS.CATEGORIE_PRODUIT_API,CategorieProduit);
  }

  updateCategorieProduit(id, data) {
    return this.http.put(API_URLS.CATEGORIE_PRODUIT_API+`/${id}` ,data);
  }

  deleteCategorieProduit(id) {
    return this.http.delete(API_URLS.CATEGORIE_PRODUIT_API+`/${id}`);
  }
}
