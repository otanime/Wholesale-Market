import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URLS } from 'src/app/mg/config/api.url.config';
import { FileDB } from 'src/app/mg/modules/FileDB';
import { LigneTarification } from 'src/app/mg/modules/LigneTarification';
import { LigneID } from 'src/app/mg/modules/LigneTarifPk';
import { Tarif } from 'src/app/mg/modules/Tarification';

const tarifsUrl = 'http://localhost:8085/api/tarifs';
const lignesUrl = 'http://localhost:8085/tarifs';
const filesUrl = 'http://localhost:8085/files';

@Injectable({
  providedIn: 'root'
})
export class TarifService {

  constructor(private http: HttpClient) { }

  getTarifBLigneId(idProduit,idTarif){
    let params = new HttpParams();
params = params.append("param1",idProduit);
params = params.append("param2",idTarif);
    return this.http.get<LigneTarification>(API_URLS.Ligne_Tarif_API+`/find`, {params: params})

  }
  
  getTarifs() {
    return this.http.get<LigneTarification[]>(API_URLS.Ligne_Tarif_API); 
  }

    public addTarif(lgt: Tarif): Observable<Tarif> {
    return this.http.post<Tarif>(API_URLS.Tarifs_API,lgt);
  }
  
  createtarif(lgt: LigneTarification): Observable<any> {
    return this.http.post<LigneTarification>(API_URLS.Ligne_Tarif_API,lgt);
  }

  public getAllFileByTarif(TarifID : number) : Observable<any> {

    return this.http.get<FileDB>(API_URLS.Tarifs_API + `/${TarifID}/file`);
  }

  // add a file to Tarif
  public addFile(TarifID : number, file: File) : Observable<any> {

    const formdata: FormData = new FormData();
    formdata.append('file', file);

    return this.http.post(API_URLS.Tarifs_API + `/${TarifID}/file`, formdata);
  }

  // delete a file
  public deleteFilet(id : number) : Observable<any> {

    return this.http.delete(API_URLS.Tarifs_API + `/file/${id}`);
  }

  // delete all file of an Tarif
  public deleteAllFiletByTarif(TarifID : number, id : number) : Observable<any> {

    return this.http.delete(API_URLS.Tarifs_API + `/${TarifID}/file`);
  }
}
