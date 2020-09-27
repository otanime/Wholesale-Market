export class Personne {
      idPers : number;
  nom : String  ;
    prenom  :String;
      tel : String;
     adresse : String;
    protected type : String;

    get typeset():String
    {
        return this.type;
    }
 }