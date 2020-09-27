package ma.sic.mg.produit.entities;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.Data;

@Entity
@Data
public class Produit {
 @Id
 @GeneratedValue(strategy = GenerationType.IDENTITY)
	private  int IdProduit;
	private String libelle ;
	private String discription ;
	@ManyToOne(cascade = CascadeType.MERGE)
	@JsonIgnoreProperties({"produits"} )
	private SousTypeProduit sousTypeProduit;
	
}
