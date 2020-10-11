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

  produit: number;
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

import { AgentBalance } from "./AgentBalance";
import { Vehicule } from "./vehicule";

import { Conducteur } from "./conducteur";
import { Vendeur } from "./Vendeur";

import { Produit } from "./Produit";
import { TypeProduit } from "./TypeProduit";
import { SousTypeProduit } from "./SousTypeProduit";

import { Hangarbase } from "./Hangar";
import { Emballage } from "./emballage";


export class PesageLord {

  id: number;
  dateDeclaration: Date;
  agentBallance : AgentBalance;

  vehiculeMatricule: Vehicule;
  conducteurCin: Conducteur;
  vendeurCin: Vendeur;

  produit: Produit;
  typeProduit: TypeProduit;
  sousTypeProduit: SousTypeProduit;

  hangar: Hangarbase;
  provenance: string;

  emballage: Emballage;
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
