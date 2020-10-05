package ma.sic.mg.personnel.entities;

import java.io.Serializable;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import ma.sic.mg.personnel.entities.*;
@Entity 
@ToString
@DiscriminatorValue("Mandataire")
public class Mandataire  extends Personne  implements Serializable {

	public Mandataire(int idPers, String nom, String prenom, String tel, String adresse) {
		super(idPers, nom, prenom, tel, adresse);
		// TODO Auto-generated constructor stub
	}
	
	public Mandataire() {}
}
