import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

import {  API_URLS } from "../../config/api.url.config";

import { SousTypeEmballage } from "../../modules/sousTypeEmballage";

@Injectable({
  providedIn: 'root'
})
export class SousTypeEmballageService {

  // just a simple constructor
  constructor(private http : HttpClient) { }


  // get all SousTypeEmballages
  public getSousTypeEmballages(): Observable<any> {

    return this.http.get(API_URLS.SOUS_TYPE_EMBALLAGE_API);
  }

  // add a new SousTypeEmballage
  public addSousTypeEmballage(s : SousTypeEmballage) : Observable<any> {

    return this.http.post(API_URLS.SOUS_TYPE_EMBALLAGE_API, s);
  }

  // update a SousTypeEmballage
  public updateSousTypeEmballage(s : SousTypeEmballage) : Observable<any> {

    return this.http.put(API_URLS.SOUS_TYPE_EMBALLAGE_API, s);
  }

  // delete a SousTypeEmballage
  public deleteSousTypeEmballage(id : number) : Observable<any> {

    return this.http.delete(API_URLS.SOUS_TYPE_EMBALLAGE_API + `/${id}`);
  }

  // get a SousTypeEmballage by ID
  public getSousTypeEmballage(id : number) : Observable<any> {

    return this.http.get(API_URLS.SOUS_TYPE_EMBALLAGE_API + `/${id}`);
  }
}
