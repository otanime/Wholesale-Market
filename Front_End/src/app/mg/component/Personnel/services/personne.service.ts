import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Personne } from 'src/app/mg/modules/personne';
import { Observable } from 'rxjs';
import { Mandataire } from 'src/app/mg/modules/Mandataire';
import { AgentBalance } from 'src/app/mg/modules/AgentBalance';
import { AgentCommission } from 'src/app/mg/modules/AgentCommission';
import { API_URLS } from 'src/app/mg/config/api.url.config';


@Injectable({
  providedIn: 'root'
})
export class PersonneService {

  constructor(private http: HttpClient) { }


  getPersonnes() {
    return this.http.get<Personne[]>(API_URLS.PERSONNEL_API);
  }
  getPersonne(id) {
    return this.http.get<Personne>(API_URLS.PERSONNEL_API+`/${id}`);
  }
  getAgentsComissions() {
    return this.http.get<AgentCommission[]>(API_URLS.AGENTCOMMISSIONS_API);
  }

  getAgentsBalance() {
    return this.http.get<AgentBalance[]>(API_URLS.AGENTBALACE_API);
  }

  getMandataires() {
    return this.http.get<Mandataire[]>(API_URLS.MANDATAIRE_API);
  }


  createmandataire(mandataire: Mandataire): Observable<any> {
    return this.http.post<Mandataire>(API_URLS.MANDATAIRE_API,mandataire);
  }
  updateprs(mandataire: Personne): Observable<any> {
    return this.http.post<Personne>(API_URLS.PERSONNEL_API,mandataire);
  }
  createAgentBalance(agentBalance: AgentBalance): Observable<any> {
    return this.http.post<AgentBalance>(API_URLS.AGENTBALACE_API, agentBalance);
  }
  createAgentCommission(agentc: AgentCommission): Observable<any> {
    return this.http.post<AgentCommission>(API_URLS.AGENTCOMMISSIONS_API, agentc);
  }
  handleError(error: any) {
    throw new Error("Method not implemented.");
  }

  updateMandataire(id, data) {
    return this.http.put(API_URLS.MANDATAIRE_API+`/${id}`, data);
  }

  deletePersonne(id) {
    return this.http.delete(API_URLS.PERSONNEL_API+`/${id}`);
  }




}
