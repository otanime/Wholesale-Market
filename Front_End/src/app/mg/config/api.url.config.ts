
const BASE = 'http://localhost'
const PATH = 'api'

// MS Ports
const PORT_MS_CONDUCTEUR = '9001'
const PORT_MS_VEHICULE = '9002'
const PORT_MS_EMBALLAGE = '9003'
const PORT_MS_EVENEMENT = '9004'


export const API_URLS = {

  // Conducteur MS
  CONDUCTEUR_API : BASE + ':' + PORT_MS_CONDUCTEUR + '/' + PATH + '/conducteurs',

  // Vehicule MS
  VEHICULE_API : BASE + ':' + PORT_MS_VEHICULE + '/' + PATH + '/vehicules',
  TYPE_VEHICULE_API : BASE + ':' + PORT_MS_VEHICULE + '/' + PATH + '/type-vehicules',

  // Emballage MS
  EMBALLAGE_API : BASE + ':' + PORT_MS_EMBALLAGE + '/' + PATH + '/emballages',
  TYPE_EMBALLAGE_API : BASE + ':' + PORT_MS_EMBALLAGE + '/' + PATH + '/type-emballages',
  SOUS_TYPE_EMBALLAGE_API : BASE + ':' + PORT_MS_EMBALLAGE + '/' + PATH + '/sous-type-emballages',

  // Evenement MS
  EVENEMENT_API : BASE + ':' + PORT_MS_EVENEMENT + '/' + PATH + '/evenements',
  TYPE_EVENEMENT_API : BASE + ':' + PORT_MS_EVENEMENT + '/' + PATH + '/evenements/types',


};
