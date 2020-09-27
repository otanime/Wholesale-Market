package ma.sic.mg.produit.entities;

import java.io.Serializable;
import java.util.ArrayList;
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
public class CategorieProduit  implements Serializable{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int idProductCategory;
	private String libProductCategory;
	@OneToMany(mappedBy = "categorie")
	@JsonIgnoreProperties({"categorie"} )
	private List<TypeProduit> typeProduits ;
	
}
