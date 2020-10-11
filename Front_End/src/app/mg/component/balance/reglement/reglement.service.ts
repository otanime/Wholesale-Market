import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

import {  API_URLS } from "../../../config/api.url.config";

import { Reglement } from "../../../modules/Reglement";

@Injectable({
  providedIn: 'root'
})
export class ReglementService {

  // just a simple constructor
  constructor(private http : HttpClient) { }


  // get all Reglements
  public getReglements(): Observable<any> {

    return this.http.get(API_URLS.REGLEMENT_API);
  }

  // update a Reglement | Validation
  public updateReglement(s : Reglement) : Observable<any> {

    return this.http.put(API_URLS.REGLEMENT_API, s);
  }

  // get a Reglement by ID
  public getReglement(id : number) : Observable<any> {

    return this.http.get(API_URLS.REGLEMENT_API + `/${id}`);
  }

  // get pesage of a reglement
  public getPesageByReglement(id : number) : Observable<any> {

    return this.http.get(API_URLS.REGLEMENT_API + `/${id}/pesage`);
  }

  // get all file of an Reglement
  public getAllFileByReglement(reglementID : number) : Observable<any> {

    return this.http.get(API_URLS.REGLEMENT_API + `/${reglementID}/file`);
  }

  // add a file to reglement
  public addFile(reglementID : number, file: File) : Observable<any> {

    const formdata: FormData = new FormData();
    formdata.append('file', file);

    return this.http.post(API_URLS.REGLEMENT_API + `/${reglementID}/file`, formdata);
  }

  // delete a file
  public deleteFilet(id : number) : Observable<any> {

    return this.http.delete(API_URLS.REGLEMENT_API + `/file/${id}`);
  }

  // delete all file of an reglement
  public deleteAllFiletByReglement(reglementID : number, id : number) : Observable<any> {

    return this.http.delete(API_URLS.REGLEMENT_API + `/${reglementID}/file`);
  }
}
