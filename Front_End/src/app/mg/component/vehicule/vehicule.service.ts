import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

import {  API_URLS } from "../../config/api.url.config";

import { Vehicule } from "../../modules/vehicule";

@Injectable({
  providedIn: 'root'
})
export class VehiculeService {

  // just a simple constructor
  constructor(private http : HttpClient) { }


  // get all Vehicules
  public getVehicules(): Observable<any> {

    return this.http.get(API_URLS.VEHICULE_API);
  }

  // add a new vehicule
  public addVehicule(s : Vehicule) : Observable<any> {

    return this.http.post(API_URLS.VEHICULE_API, s);
  }

  // update a vehicule
  public updateVehicule(s : Vehicule) : Observable<any> {

    return this.http.put(API_URLS.VEHICULE_API, s);
  }

  // delete a vehicule
  public deleteVehicule(id : number) : Observable<any> {

    return this.http.delete(API_URLS.VEHICULE_API + `/${id}`);
  }

  // get a vehicule by ID
  public getVehicule(id : number) : Observable<any> {

    return this.http.get(API_URLS.VEHICULE_API + `/${id}`);
  }

  // test if a matricule exist
  public existsByMatricule(matricule : string) : Observable<any> {

    return this.http.get(API_URLS.VEHICULE_API + `/matricule/${matricule}`);
  }

}
