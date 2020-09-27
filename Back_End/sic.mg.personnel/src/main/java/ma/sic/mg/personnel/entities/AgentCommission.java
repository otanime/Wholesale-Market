package ma.sic.mg.personnel.entities;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@NoArgsConstructor
@ToString
@Entity
@DiscriminatorValue("Agent Commission")
public class AgentCommission extends Personne {

	public AgentCommission(int idPers, String nom, String prenom, String tel, String adresse) {
		super(idPers, nom, prenom, tel, adresse);
		// TODO Auto-generated constructor stub
	}

}
