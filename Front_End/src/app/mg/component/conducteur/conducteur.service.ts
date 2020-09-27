import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

import {  API_URLS } from "../../config/api.url.config";

import { Conducteur } from "../../modules/conducteur";

@Injectable({
  providedIn: 'root'
})
export class ConducteurService {

  // just a simple constructor
  constructor(private http : HttpClient) { }


  // get all Conducteurs
  public getConducteurs(): Observable<any> {

    return this.http.get(API_URLS.CONDUCTEUR_API);
  }

  // add a new conducteur
  public addConducteur(s : Conducteur) : Observable<any> {

    return this.http.post(API_URLS.CONDUCTEUR_API, s);
  }

  // update a conducteur
  public updateConducteur(s : Conducteur) : Observable<any> {

    return this.http.put(API_URLS.CONDUCTEUR_API, s);
  }

  // delete a conducteur
  public deleteConducteur(id : number) : Observable<any> {

    return this.http.delete(API_URLS.CONDUCTEUR_API + `/${id}`);
  }

  // get a conducteur by ID
  public getConducteur(id : number) : Observable<any> {

    return this.http.get(API_URLS.CONDUCTEUR_API + `/${id}`);
  }

  // get a conducteur by CIN
  public getConducteurCin(cin : string) : Observable<any> {

    return this.http.get(API_URLS.CONDUCTEUR_API + `/cin/${cin}`);
  }

  // get a conducteur by TEL
  public getConducteurTel(tel : string) : Observable<any> {

    return this.http.get(API_URLS.CONDUCTEUR_API + `/tel/${tel}`);
  }


}
