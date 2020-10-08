package ma.sic.mg.tarification.entities;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import lombok.Data;

@Entity
@Data
public class Tarification {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int idTarif;

	private String status;
	private double prix;

 	@OneToMany(mappedBy = "tarif", cascade = CascadeType.ALL)
	private  List<FileDB> pj;

 	@OneToMany(mappedBy = "tarif")
	private List<LigneTarification> listligneTarif;

}
