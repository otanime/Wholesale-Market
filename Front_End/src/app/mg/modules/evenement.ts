// MS Emballage
import { TypeEvenement } from "./TypeEvenement";
import { File } from "./file";

export class Evenement {

  id: number;
  description: string;

  dateDeclaration: Date;
  dateEvenement: Date;

  matriculeVehicule: string;
  conducteurCin: string;

  status: string;
  observation: string;

  typeEvenement: TypeEvenement;
  files: File[];

}
