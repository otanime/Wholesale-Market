import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

import {  API_URLS } from "../../config/api.url.config";

import { TypeEmballage } from "../../modules/typeEmballage";

@Injectable({
  providedIn: 'root'
})
export class TypeEmballageService {

  // just a simple constructor
  constructor(private http : HttpClient) { }


  // get all TypeEmballages
  public getTypeEmballages(): Observable<any> {

    return this.http.get(API_URLS.TYPE_EMBALLAGE_API);
  }

  // add a new TypeEmballage
  public addTypeEmballage(s : TypeEmballage) : Observable<any> {

    return this.http.post(API_URLS.TYPE_EMBALLAGE_API, s);
  }

  // update a TypeEmballage
  public updateTypeEmballage(s : TypeEmballage) : Observable<any> {

    return this.http.put(API_URLS.TYPE_EMBALLAGE_API, s);
  }

  // delete a TypeEmballage
  public deleteTypeEmballage(id : number) : Observable<any> {

    return this.http.delete(API_URLS.TYPE_EMBALLAGE_API + `/${id}`);
  }

  // get a TypeEmballage by ID
  public getTypeEmballage(id : number) : Observable<any> {

    return this.http.get(API_URLS.TYPE_EMBALLAGE_API + `/${id}`);
  }
}
