import { Injectable } from '@angular/core';
import { SousTypeProduit } from 'src/app/mg/modules/SousTypeProduit';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const SousTypeProduitsUrl = 'http://localhost:8084/typeproduits';
@Injectable({
  providedIn: 'root'
})
export class SousSousTypeProduitService {


  constructor(private http: HttpClient) { }
  
  getsousTypes() {
    return this.http.get<SousTypeProduit[]>(`${SousTypeProduitsUrl}/all`); 
  }
  getType(id) {
    return this.http.get<SousTypeProduit>(`${SousTypeProduitsUrl}/find/${id}`);
  }

  createSousTypeProduit(SousTypeProduit: SousTypeProduit): Observable<any> {
    return this.http.post<SousTypeProduit>(SousTypeProduitsUrl + '/save',SousTypeProduit);
  }

  updateSousTypeProduit(id, data) {
    return this.http.put(`${SousTypeProduitsUrl}/${id}` ,data);
  }

  deleteSousTypeProduit(id) {
    return this.http.delete(`${SousTypeProduitsUrl}/delete/${id}`);
  }
}
