import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FileDB } from 'src/app/mg/modules/FileDB';
import { LigneTarification } from 'src/app/mg/modules/LigneTarification';

const tarifsUrl = 'http://localhost:8085/tarifs';
const filesUrl = 'http://localhost:8085/files';

@Injectable({
  providedIn: 'root'
})
export class TarifService {

  constructor(private http: HttpClient) { }

  getTarifs() {
    return this.http.get<LigneTarification[]>(`${tarifsUrl}/all`); 
  }
  
  createtarif(lgt: LigneTarification): Observable<any> {
    return this.http.post<LigneTarification>(tarifsUrl + '/save',lgt);
  }

  getFile( id : string){
    return this.http.get<FileDB>(`${filesUrl}/${id}`); 
  }
  sendFile( id : FileDB){
    let body = new FormData();
    // Add file content to prepare the request
    body.append("file", id.data);

    return this.http.post(filesUrl + '/upload',body); 
  }

}
