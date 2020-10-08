package ma.sic.mg.tarification.entities;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;

import lombok.Data;

@Embeddable
@Data
public class LigneTarifPK implements Serializable {

	@Column(name = "produitID")
	private int idProduit;

	@Column(name = "TarifID")
	private int idTarif;
}
