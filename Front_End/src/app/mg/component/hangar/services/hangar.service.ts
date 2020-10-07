import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URLS } from 'src/app/mg/config/api.url.config';
import { Hangar, Hangarbase } from 'src/app/mg/modules/Hangar';

@Injectable({
  providedIn: 'root'
})
export class HangarService {

  // just a simple constructor
  constructor(private http : HttpClient) { }


  // get all Hangars
  public getHangars(): Observable<any> {

    return this.http.get(API_URLS.HANGAR_API);
  }

  // add a new Hangar
  public addHangar(s : Hangarbase) : Observable<any> {

    return this.http.post(API_URLS.HANGAR_API, s);
  }

  // update a Hangar
  public updateHangar(s : Hangar) : Observable<any> {

    return this.http.put(API_URLS.HANGAR_API, s);
  }

  // delete a Hangar
  public deleteHangar(id : number) : Observable<any> {

    return this.http.delete(API_URLS.HANGAR_API + `/${id}`);
  }

  // get a Hangar by ID
  public getHangar(id : number) : Observable<any> {

    return this.http.get(API_URLS.HANGAR_API + `/${id}`);
  }

}
