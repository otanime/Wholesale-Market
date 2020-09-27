import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

import {  API_URLS } from "../../config/api.url.config";

import { Evenement } from "../../modules/Evenement";

@Injectable({
  providedIn: 'root'
})
export class EvenementService {

  // just a simple constructor
  constructor(private http : HttpClient) { }


  // get all Evenements
  public getEvenements(): Observable<any> {

    return this.http.get(API_URLS.EVENEMENT_API);
  }

  // add a new Evenement
  public addEvenement(s : Evenement) : Observable<any> {

    return this.http.post(API_URLS.EVENEMENT_API, s);
  }

  // update a Evenement
  public updateEvenement(s : Evenement) : Observable<any> {

    return this.http.put(API_URLS.EVENEMENT_API, s);
  }

  // delete a Evenement
  public deleteEvenement(id : number) : Observable<any> {

    return this.http.delete(API_URLS.EVENEMENT_API + `/${id}`);
  }

  // get a Evenement by ID
  public getEvenement(id : number) : Observable<any> {

    return this.http.get(API_URLS.EVENEMENT_API + `/${id}`);
  }


  // get all file of an Evenement
  public getAllFileByEvenement(evenementID : number) : Observable<any> {

    return this.http.get(API_URLS.EVENEMENT_API + `/${evenementID}/file`);
  }

  // add a file to evenement
  public addFile(evenementID : number, file: File) : Observable<any> {

    const formdata: FormData = new FormData();
    formdata.append('file', file);

    return this.http.post(API_URLS.EVENEMENT_API + `/${evenementID}/file`, formdata);
  }

  // delete a file
  public deleteFilet(id : number) : Observable<any> {

    return this.http.delete(API_URLS.EVENEMENT_API + `/file/${id}`);
  }

  // delete all file of an evenement
  public deleteAllFiletByEvenement(evenementID : number, id : number) : Observable<any> {

    return this.http.delete(API_URLS.EVENEMENT_API + `/${evenementID}/file`);
  }

  // confirmation the Evenement
  public confirmationEvenement(s : Evenement) : Observable<any> {

    return this.http.put(API_URLS.EVENEMENT_API + `/confirmation`, s);
  }

  // annulation the Evenement
  public annulationEvenement(s : Evenement) : Observable<any> {

    return this.http.put(API_URLS.EVENEMENT_API + `/annulation`, s);
  }

}
