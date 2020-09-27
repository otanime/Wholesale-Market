import { Injectable } from '@angular/core';
import { TypeProduit } from 'src/app/mg/modules/TypeProduit';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const TypeProduitsUrl = 'http://localhost:8084/typeproduits';
@Injectable({
  providedIn: 'root'
})
export class TypeproduitService {

  constructor(private http: HttpClient) { }
  
  getTypes() {
    return this.http.get<TypeProduit[]>(`${TypeProduitsUrl}/all`); 
  }
  getType(id) {
    return this.http.get<TypeProduit>(`${TypeProduitsUrl}/find/${id}`);
  }

  createTypeProduit(TypeProduit: TypeProduit): Observable<any> {
    return this.http.post<TypeProduit>(TypeProduitsUrl + '/save',TypeProduit);
  }

  updateTypeProduit(id, data) {
    return this.http.put(`${TypeProduitsUrl}/${id}` ,data);
  }

  deleteTypeProduit(id) {
    return this.http.delete(`${TypeProduitsUrl}/delete/${id}`);
  }
}
