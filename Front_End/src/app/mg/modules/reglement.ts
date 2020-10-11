// MS Emballage
import { File } from "./file";
import { Recu } from "./recu";

export class Reglement {

  id: number;

  mandataire: number;
  dateReglement: Date;

  statut: string;
  observation: string;

  files: File[];

  recu : Recu;


}
