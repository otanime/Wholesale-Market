import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

import {  API_URLS } from "../../config/api.url.config";

import { TypeVehicule } from "../../modules/typeVehicule";

@Injectable({
  providedIn: 'root'
})
export class TypeVehiculeService {

  // just a simple constructor
  constructor(private http : HttpClient) { }


  // get all TypeVehicules
  public getTypeVehicules(): Observable<any> {

    return this.http.get(API_URLS.TYPE_VEHICULE_API);
  }

  // add a new typeVehicule
  public addTypeVehicule(s : TypeVehicule) : Observable<any> {

    return this.http.post(API_URLS.TYPE_VEHICULE_API, s);
  }

  // update a typeVehicule
  public updateTypeVehicule(s : TypeVehicule) : Observable<any> {

    return this.http.put(API_URLS.TYPE_VEHICULE_API, s);
  }

  // delete a typeVehicule
  public deleteTypeVehicule(id : number) : Observable<any> {

    return this.http.delete(API_URLS.TYPE_VEHICULE_API + `/${id}`);
  }

  // get a typeVehicule by ID
  public getTypeVehicule(id : number) : Observable<any> {

    return this.http.get(API_URLS.TYPE_VEHICULE_API + `/${id}`);
  }

}
