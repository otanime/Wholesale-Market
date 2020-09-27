package ma.sic.mg.produit.entities;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.Data;

@Entity
@Data
public class SousTypeProduit {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int idSousType ;
	private String libelle;
	@ManyToOne(cascade = CascadeType.MERGE)
	@JsonIgnoreProperties({"produits"} )
	private TypeProduit typeProduit ;
	@OneToMany(mappedBy = "sousTypeProduit")
	@JsonIgnoreProperties({"sousTypeProduit"} )
	private List<Produit> produits ;

}
