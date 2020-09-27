package ma.sic.mg.produit.entities;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.Data;

@Entity
@Data
public class TypeProduit {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
private int idtypeProduit;
private String libtypeProduit;
@OneToMany(mappedBy = "typeProduit")
@JsonIgnoreProperties({"typeProduit"} )
private List<SousTypeProduit> sousTypeProduits;
@ManyToOne(cascade = CascadeType.MERGE)
private CategorieProduit categorie ;
}
