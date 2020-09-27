import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

import {  API_URLS } from "../../config/api.url.config";

import { TypeEvenement } from "../../modules/TypeEvenement";
//import { File as MyFile } from "../../modules/file";

@Injectable({
  providedIn: 'root'
})
export class TypeEvenementService {

  // just a simple constructor
  constructor(private http : HttpClient) { }


  // get all TypeEvenements
  public getTypeEvenements(): Observable<any> {

    return this.http.get(API_URLS.TYPE_EVENEMENT_API);
  }

  // add a new TypeEvenement
  public addTypeEvenement(s : TypeEvenement) : Observable<any> {

    return this.http.post(API_URLS.TYPE_EVENEMENT_API, s);
  }

  // update a TypeEvenement
  public updateTypeEvenement(s : TypeEvenement) : Observable<any> {

    return this.http.put(API_URLS.TYPE_EVENEMENT_API, s);
  }

  // delete a TypeEvenement
  public deleteTypeEvenement(id : number) : Observable<any> {

    return this.http.delete(API_URLS.TYPE_EVENEMENT_API + `/${id}`);
  }

  // get a TypeEvenement by ID
  public getTypeEvenement(id : number) : Observable<any> {

    return this.http.get(API_URLS.TYPE_EVENEMENT_API + `/${id}`);
  }


}
