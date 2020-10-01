import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
    return this.http.get<LigneTarification>(`${lignesUrl}/find`, {params: params})

  }
  
  getTarifs() {
    return this.http.get<LigneTarification[]>(`${lignesUrl}/all`); 
  }

    public addTarif(lgt: Tarif): Observable<Tarif> {
    return this.http.post<Tarif>(tarifsUrl ,lgt);
  }
  
  createtarif(lgt: LigneTarification): Observable<any> {
    return this.http.post<LigneTarification>(lignesUrl + '/save',lgt);
  }

  public getAllFileByTarif(TarifID : number) : Observable<any> {

    return this.http.get<FileDB>(tarifsUrl + `/${TarifID}/file`);
  }

  // add a file to Tarif
  public addFile(TarifID : number, file: File) : Observable<any> {

    const formdata: FormData = new FormData();
    formdata.append('file', file);

    return this.http.post(tarifsUrl + `/${TarifID}/file`, formdata);
  }

  // delete a file
  public deleteFilet(id : number) : Observable<any> {

    return this.http.delete(tarifsUrl + `/file/${id}`);
  }

  // delete all file of an Tarif
  public deleteAllFiletByTarif(TarifID : number, id : number) : Observable<any> {

    return this.http.delete(tarifsUrl +  `/${TarifID}/file`);
  }
}
