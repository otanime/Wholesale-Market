import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vendeur } from 'src/app/mg/modules/Vendeur';
import { Observable } from 'rxjs';

const vendeursUrl = 'http://localhost:8081/vendeurs';

@Injectable({
  providedIn: 'root'
})
export class VendeurService {

  constructor(private http: HttpClient) { }
  
  getVendeurs() {
    return this.http.get<Vendeur[]>(`${vendeursUrl}/all`); 
  }
  getVendeur(id) {
    return this.http.get<Vendeur>(`${vendeursUrl}/find/${id}`);
  }

  createvendeur(vendeur: Vendeur): Observable<any> {
    return this.http.post<Vendeur>(vendeursUrl + '/save',vendeur);
  }

  updateVendeur(id, data) {
    return this.http.put(`${vendeursUrl}/${id}` ,data);
  }

  deleteVendeur(id) {
    return this.http.delete(`${vendeursUrl}/delete/${id}`);
  }

}
