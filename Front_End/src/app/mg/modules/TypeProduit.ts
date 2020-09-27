import { SousTypeProduit } from './SousTypeProduit';
import { CategorieProduit } from './CategorieProduit';

export class TypeProduit {
    idtypeProduit:    number;
    libtypeProduit:   string;
    categorie : CategorieProduit ;
    sousTypeProduits: SousTypeProduit[];
}
