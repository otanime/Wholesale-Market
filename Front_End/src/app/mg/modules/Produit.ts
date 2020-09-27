import { SousTypeProduit } from './SousTypeProduit';

export class Produit {
    libelle:          string;
    discription ?:      string;
    sousTypeProduit : SousTypeProduit;
    idProduit:        number;
}
