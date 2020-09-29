package ma.sic.mg.tarification.entities;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.Data;

@Data
@Entity
public class LigneTarification {
	@EmbeddedId
	private LigneTarifPK  ligneID ;
	@Temporal(TemporalType.DATE)
	private Date dateDebut;
	@Temporal(TemporalType.DATE)
	private Date dateFin;
	@Temporal(TemporalType.DATE)
	private Date dateModification;
	private Double oldPrix;
	@Column(name = "AgentCommissionID")
	private int idAgentCommission ;
	@ManyToOne(cascade = CascadeType.MERGE)
	@JsonIgnoreProperties({"listligneTarif"} )
	private Tarification tarif ;
	

}
