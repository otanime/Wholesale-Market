package ma.sic.mg.vendeur.entities;

import java.io.Serializable;

import javax.persistence.*;

import lombok.Data;

@Entity
@Data
public class Vendeur implements Serializable{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private  int idVendeur;

	@Column(unique = true, nullable = false)
	private String CIN;

	private String nom ;
	private String prenom ;
	private String tel ;
	private String adresse;
	private int patente ;


}
