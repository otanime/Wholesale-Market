import { LigneTarification } from './LigneTarification';

export class Tarif {
    idTarif: number;
    status:  string;
    prix : number;
    pj:      File[];
    listligneTarif :LigneTarification[]
}