package ma.sic.mg.personnel.entities;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@DiscriminatorValue("Agent de Balance")
public class AgentBalance  extends Personne{
	public AgentBalance(int idPers, String nom, String prenom, String tel, String adresse) {
		super(idPers, nom, prenom, tel, adresse);
		// TODO Auto-generated constructor stub
	}

	private int matrecule;

	public AgentBalance(int matrecule) {
		super();
		this.matrecule = matrecule;
	}
	public AgentBalance() {
	
	}

	public int getMatrecule() {
		return matrecule;
	}

	public void setMatrecule(int matrecule) {
		this.matrecule = matrecule;
	}
	

}
