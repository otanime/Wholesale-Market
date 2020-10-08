import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

import {  API_URLS } from "../../../config/api.url.config";

import { Pesage } from "../../../modules/Pesage";

@Injectable({
  providedIn: 'root'
})
export class PesageService {

  // just a simple constructor
  constructor(private http : HttpClient) { }


  // get all Pesages
  public getPesages(): Observable<any> {

    return this.http.get(API_URLS.BALLANCE_API);
  }

  // add a new Pesage
  public addPesage(s : Pesage) : Observable<any> {

    return this.http.post(API_URLS.BALLANCE_API, s);
  }

  // update a Pesage
  public updatePesage(s : Pesage) : Observable<any> {

    return this.http.put(API_URLS.BALLANCE_API, s);
  }

  // delete a Pesage
  public deletePesage(id : number) : Observable<any> {

    return this.http.delete(API_URLS.BALLANCE_API + `/${id}`);
  }

  // get a Pesage by ID
  public getPesage(id : number) : Observable<any> {

    return this.http.get(API_URLS.BALLANCE_API + `/${id}`);
  }


  // get all file of an Pesage
  public getAllFileByPesage(pesageID : number) : Observable<any> {

    return this.http.get(API_URLS.BALLANCE_API + `/${pesageID}/file`);
  }

  // add a file to pesage
  public addFile(pesageID : number, file: File) : Observable<any> {

    const formdata: FormData = new FormData();
    formdata.append('file', file);

    return this.http.post(API_URLS.BALLANCE_API + `/${pesageID}/file`, formdata);
  }

  // delete a file
  public deleteFilet(id : number) : Observable<any> {

    return this.http.delete(API_URLS.BALLANCE_API + `/file/${id}`);
  }

  // delete all file of an pesage
  public deleteAllFiletByPesage(pesageID : number, id : number) : Observable<any> {

    return this.http.delete(API_URLS.BALLANCE_API + `/${pesageID}/file`);
  }

}
