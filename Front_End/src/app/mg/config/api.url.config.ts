
const BASE = 'http://localhost'
const PATH = 'api'

// MS Ports
const PORT_MS_CONDUCTEUR = '9001'
const PORT_MS_VEHICULE = '9002'
const PORT_MS_EMBALLAGE = '9003'
const PORT_MS_EVENEMENT = '9004'

const PORT_MS_TARIFICATION = '9005'
const PORT_MS_VENDEUR = '9006'
const PORT_MS_PRODUIT = '9007'
const PORT_MS_PERSONNEL = '9008'
const PORT_MS_HANGAR = '9009'

const PORT_MS_BALLANCE = '9010'



export const API_URLS = {

  // Conducteur MS
  CONDUCTEUR_API: BASE + ':' + PORT_MS_CONDUCTEUR + '/' + PATH + '/conducteurs',

  // Vehicule MS
  VEHICULE_API: BASE + ':' + PORT_MS_VEHICULE + '/' + PATH + '/vehicules',
  TYPE_VEHICULE_API: BASE + ':' + PORT_MS_VEHICULE + '/' + PATH + '/type-vehicules',

  // Emballage MS
  EMBALLAGE_API: BASE + ':' + PORT_MS_EMBALLAGE + '/' + PATH + '/emballages',
  TYPE_EMBALLAGE_API: BASE + ':' + PORT_MS_EMBALLAGE + '/' + PATH + '/type-emballages',
  SOUS_TYPE_EMBALLAGE_API: BASE + ':' + PORT_MS_EMBALLAGE + '/' + PATH + '/sous-type-emballages',

  // Evenement MS
  EVENEMENT_API: BASE + ':' + PORT_MS_EVENEMENT + '/' + PATH + '/evenements',
  TYPE_EVENEMENT_API: BASE + ':' + PORT_MS_EVENEMENT + '/' + PATH + '/evenements/types',

  // Vendeur MS
  VENDEUR_API: BASE + ':' + PORT_MS_VENDEUR + '/' + PATH + '/vendeurs',

  // Hangar  MS
  HANGAR_API: BASE + ':' + PORT_MS_HANGAR + '/' + PATH + '/hangars',


  // Personnel  MS
  PERSONNEL_API: BASE + ':' + PORT_MS_PERSONNEL + '/' + PATH + '/personnels',
  AGENTBALACE_API: BASE + ':' + PORT_MS_PERSONNEL + '/' + PATH + '/agentbalances',
  MANDATAIRE_API: BASE + ':' + PORT_MS_PERSONNEL + '/' + PATH + '/mandataires',
  AGENTCOMMISSIONS_API: BASE + ':' + PORT_MS_PERSONNEL + '/' + PATH + '/agentcommissions',

  // Produit  MS
  PRODUIT_API: BASE + ':' + PORT_MS_PRODUIT + '/' + PATH + '/produits',
  SOUSTYPE_PRODUIT_API: BASE + ':' + PORT_MS_PRODUIT + '/' + PATH + '/soustypesproduits',
  TYPE_PRODUIT_API: BASE + ':' + PORT_MS_PRODUIT + '/' + PATH + '/typeproduits',
  CATEGORIE_PRODUIT_API: BASE + ':' + PORT_MS_PRODUIT + '/' + PATH + '/produitcategories',

  // Tarification MS
  LIGNE_TARIFS_API: BASE + ':' + PORT_MS_TARIFICATION + '/' + PATH + '/lignetarifs',
  TARIFS_API: BASE + ':' + PORT_MS_TARIFICATION + '/' + PATH + '/tarifs',

  // Ballance MS
  BALLANCE_API : BASE + ':' + PORT_MS_BALLANCE + '/' + PATH + '/pesages'


};
