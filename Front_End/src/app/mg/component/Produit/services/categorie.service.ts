import { Injectable } from '@angular/core';
import { CategorieProduit } from 'src/app/mg/modules/CategorieProduit';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const CategorieProduitsUrl = 'http://localhost:8084/produitcategories';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor(private http: HttpClient) { }
  
  getCategories() {
    return this.http.get<CategorieProduit[]>(`${CategorieProduitsUrl}/all`); 
  }
  getcategorie(id) {
    return this.http.get<CategorieProduit>(`${CategorieProduitsUrl}/find/${id}`);
  }

  createCategorieProduit(CategorieProduit: CategorieProduit): Observable<any> {
    return this.http.post<CategorieProduit>(CategorieProduitsUrl + '/save',CategorieProduit);
  }

  updateCategorieProduit(id, data) {
    return this.http.put(`${CategorieProduitsUrl}/${id}` ,data);
  }

  deleteCategorieProduit(id) {
    return this.http.delete(`${CategorieProduitsUrl}/delete/${id}`);
  }
}
