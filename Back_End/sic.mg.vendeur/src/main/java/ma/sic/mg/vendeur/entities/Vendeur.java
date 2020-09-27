package ma.sic.mg.vendeur.entities;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;

@Entity
@Data
public class Vendeur implements Serializable{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private  int idVendeur;
	private String nom ;
	private String prenom ;
	private String tel ;
	private String adresse;
	private int patente ;
	
	
}
