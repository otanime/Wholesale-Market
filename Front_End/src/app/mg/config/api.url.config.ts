
const BASE = 'http://localhost'
const PATH = 'api'

// MS Ports
const PORT_MS_CONDUCTEUR = '9001'
const PORT_MS_VEHICULE = '9002'
const PORT_MS_EMBALLAGE = '9003'
const PORT_MS_EVENEMENT = '9004'
const PORT_MS_VENDEUR = '8081'
const PORT_MS_TARIFICATION = '8085'
const PORT_MS_PERSONNEL = '8082'
const PORT_MS_PRODUIT = '8084'
const PORT_MS_HANGAR = '8086'



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



};
