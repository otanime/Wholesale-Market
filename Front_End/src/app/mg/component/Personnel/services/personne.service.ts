import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Personne } from 'src/app/mg/modules/personne';
import { Observable } from 'rxjs';
import { Mandataire } from 'src/app/mg/modules/Mandataire';
import { AgentBalance } from 'src/app/mg/modules/AgentBalance';
import { AgentCommission } from 'src/app/mg/modules/AgentCommission';

const personesUrl = 'http://localhost:8082/personnes';
const MandatairesUrl = 'http://localhost:8082/mandataires';
const AgentCommisionUrl = 'http://localhost:8082/agentcommissions';
const AgentBalanceUrl = 'http://localhost:8082/agentbalances';


@Injectable({
  providedIn: 'root'
})
export class PersonneService {

  constructor(private http: HttpClient) { }


  getPersonnes() {
    return this.http.get<Personne[]>(`${personesUrl}/all`); 
  }
  getPersonne(id) {
    return this.http.get<Personne>(`${personesUrl}/find/${id}`);
  }

  createmandataire(mandataire: Mandataire): Observable<any> {
    return this.http.post<Mandataire>(MandatairesUrl + '/save',mandataire);
  }
  updateprs(mandataire: Personne): Observable<any> {
    return this.http.post<Personne>(personesUrl+ '/save',mandataire);
  }
  createAgentBalance(agentBalance: AgentBalance): Observable<any> {
    return this.http.post<AgentBalance>(AgentBalanceUrl + '/save', agentBalance);
  }
  createAgentCommission(agentc: AgentCommission): Observable<any> {
    return this.http.post<AgentCommission>(AgentCommisionUrl + '/save', agentc);
  }
  handleError(error: any) {
    throw new Error("Method not implemented.");
  }

  updateMandataire(id, data) {
    return this.http.put(`${Mandataire}/${id}`, data);
  }

  deletePersonne(id) {
    return this.http.delete(`${personesUrl}/delete/${id}`);
  }

  


}
