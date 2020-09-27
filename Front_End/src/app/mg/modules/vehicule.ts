// MS Vehicule

import { TypeVehicule } from "./typeVehicule";

export class Vehicule {

  id: number;
  matricule: string;

  datePremierCirculation: Date;
  typeVehicule: TypeVehicule;

  carburant: string;
  poidsVide: number;

}
