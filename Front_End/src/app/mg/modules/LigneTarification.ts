import { LigneID } from './LigneTarifPk';
import { Tarif } from './Tarification';

export class LigneTarification {
    ligneID:          LigneID;
    dateDebut:        Date;
    dateFin:          Date;
    dateModification: Date;
    oldPrix:          number;
    tarif:            Tarif;
    prix :             number
}