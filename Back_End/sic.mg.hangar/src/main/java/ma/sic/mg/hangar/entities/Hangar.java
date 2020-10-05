package ma.sic.mg.hangar.entities;

import java.io.Serializable;
import java.util.ArrayList;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.Data;

@Entity
@Data
public class Hangar implements Serializable {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int numHangar;
	private String Libelle;
	private String Description;
	private int  categorieProduit;
	
}
