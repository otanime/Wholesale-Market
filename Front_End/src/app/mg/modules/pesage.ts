// MS Emballage
import { File } from "./file";
import { Recu } from "./recu";

export class Pesage {

  id: number;
  dateDeclaration: Date;
  agentBallance : number;

  vehiculeMatricule: string;
  conducteurCin: string;
  vendeurCin: string;

  typeProduit: number;
  sousTypeProduit: number;

  hangar: number;
  provenance: string;

  emballage: number;
  nombreUnite: number;
  poidsEmballage: number;

  poidsTotal: number;
  poidsNet: number;

  poidVideVehicule: number;

  prixReference: number;
  montantTotal: number;
  taxe: number;
  taxePayer: number;

  files: File[];
  recu : Recu;

}
