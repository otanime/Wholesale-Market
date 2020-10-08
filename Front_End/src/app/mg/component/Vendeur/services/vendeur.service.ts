import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vendeur } from 'src/app/mg/modules/Vendeur';
import { Observable } from 'rxjs';
import { API_URLS } from 'src/app/mg/config/api.url.config';


@Injectable({
  providedIn: 'root'
})
export class VendeurService {

  constructor(private http: HttpClient) { }

  getVendeurs() {
    return this.http.get<Vendeur[]>(API_URLS.VENDEUR_API);
  }
  getVendeur(id) {
    return this.http.get<Vendeur>(API_URLS.VENDEUR_API+`/${id}`);
  }

  createvendeur(vendeur: Vendeur): Observable<any> {
    return this.http.post<Vendeur>(API_URLS.VENDEUR_API,vendeur);
  }

  updateVendeur(id, data) {
    return this.http.put(API_URLS.VENDEUR_API + `/${id}` ,data);
  }

  deleteVendeur(id) {
    return this.http.delete(API_URLS.VENDEUR_API+`/${id}`);
  }

}
