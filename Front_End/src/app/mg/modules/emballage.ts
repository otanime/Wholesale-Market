// MS Emballage
import { TypeEmballage } from "./typeEmballage";
import { SousTypeEmballage } from "./soustypeEmballage";

export class Emballage {

  id: number;

  libelle: string;
  description: string;

  poidsMoyen: number;
  poidsMoyenEmbarque: number;

  typeEmballage : TypeEmballage;
  sousTypeEmballage : SousTypeEmballage;

}
