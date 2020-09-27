import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

import {  API_URLS } from "../../config/api.url.config";

import { Emballage } from "../../modules/Emballage";

@Injectable({
  providedIn: 'root'
})
export class EmballageService {

  // just a simple constructor
  constructor(private http : HttpClient) { }


  // get all Emballages
  public getEmballages(): Observable<any> {

    return this.http.get(API_URLS.EMBALLAGE_API);
  }

  // add a new Emballage
  public addEmballage(s : Emballage) : Observable<any> {

    return this.http.post(API_URLS.EMBALLAGE_API, s);
  }

  // update a Emballage
  public updateEmballage(s : Emballage) : Observable<any> {

    return this.http.put(API_URLS.EMBALLAGE_API, s);
  }

  // delete a Emballage
  public deleteEmballage(id : number) : Observable<any> {

    return this.http.delete(API_URLS.EMBALLAGE_API + `/${id}`);
  }

  // get a Emballage by ID
  public getEmballage(id : number) : Observable<any> {

    return this.http.get(API_URLS.EMBALLAGE_API + `/${id}`);
  }

}
